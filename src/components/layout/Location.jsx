import "./location.css";

export default function Location() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Silver+Tower+Banjara/@17.4159944,78.4367337,15z/data=!4m10!1m2!2m1!1s%238-2-610%2FA%2F401,4th+Floor,Silver+Towers+Banjara,+Road+%2311,+Banjara+Hills,Hyderabad+-+500034,+Telangana!3m6!1s0x3bcb972fe394686d:0x46a962dba9d001e0!8m2!3d17.414027!4d78.4459339!15sCmUjOC0yLTYxMC9BLzQwMSw0dGggRmxvb3IsU2lsdmVyIFRvd2VycyBCYW5qYXJhLCBSb2FkICMxMSwgQmFuamFyYSBIaWxscyxIeWRlcmFiYWQgLSA1MDAwMzQsIFRlbGFuZ2FuYVphIl84IDIgNjEwIGEgNDAxIDR0aCBmbG9vciBzaWx2ZXIgdG93ZXJzIGJhbmphcmEgcm9hZCAjMTEgYmFuamFyYSBoaWxscyBoeWRlcmFiYWQgNTAwMDM0IHRlbGFuZ2FuYZIBFGNvbnN0cnVjdGlvbl9jb21wYW55mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVIxZVRkeVQzaDNSUkFCqgHlAQoKL20vMDNjY3JqeAoJL20vMDN4NW5mCggvbS8wOWM2dxABKjoiNjggMiA2MTAgYSA0MDEgNHRoIGZsb29yIHNpbHZlciB0b3dlcnMgYmFuamFyYSByb2FkICMxMSgAMh8QASIb2a2f7iHAv_1yzh88jbgVNlI2ZSz7_jXw554JMmMQAiJfOCAyIDYxMCBhIDQwMSA0dGggZmxvb3Igc2lsdmVyIHRvd2VycyBiYW5qYXJhIHJvYWQgIzExIGJhbmphcmEgaGlsbHMgaHlkZXJhYmFkIDUwMDAzNCB0ZWxhbmdhbmHgAQD6AQQIABAq!16s%2Fg%2F11f_j3lr2b?entry=ttu&g_ep=EgoyMDI1MTAxNS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="location-footer-wrapper">
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="location-link"
        title="Get Directions"
      >
        <i className="bi bi-geo-alt-fill location-icon"></i>
        <span className="location-span">Click to view location</span>
      </a>
    </div>
  );
}
