import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    details: "",
    imageUrls: [""], // array for multiple image URLs
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUrlChange = (index, value) => {
    const newUrls = [...formData.imageUrls];
    newUrls[index] = value;
    setFormData({ ...formData, imageUrls: newUrls });
  };

  const addImageField = () => {
    setFormData({ ...formData, imageUrls: [...formData.imageUrls, ""] });
  };

  const removeImageField = (index) => {
    const newUrls = formData.imageUrls.filter((_, i) => i !== index);
    setFormData({ ...formData, imageUrls: newUrls });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    try {
      await addDoc(collection(db, "projects"), {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        details: formData.details,
        images: formData.imageUrls.filter((url) => url.trim() !== ""), // remove empty
      });

      setFormData({
        title: "",
        description: "",
        category: "",
        details: "",
        imageUrls: [""],
      });

      setSuccess(true);
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Check console for details.");
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="fw-bold mb-3">Add New Project</h4>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Image URLs */}
          <div className="mb-3">
            <label className="form-label">Image URLs</label>
            {formData.imageUrls.map((url, idx) => (
              <div key={idx} className="d-flex mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={url}
                  onChange={(e) => handleImageUrlChange(idx, e.target.value)}
                  placeholder="Enter image URL"
                  required={idx === 0} // require at least first URL
                />
                {formData.imageUrls.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => removeImageField(idx)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="btn btn-outline-primary btn-sm mt-2"
              onClick={addImageField}
            >
              + Add another image
            </button>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>

          {/* Details */}
          <div className="mb-3">
            <label className="form-label">Full Details</label>
            <textarea
              name="details"
              rows="4"
              value={formData.details}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Project
          </button>
        </form>

        {success && (
          <div className="alert alert-success mt-3">
            ✅ Project added successfully!
          </div>
        )}
      </div>
    </div>
  );
}
