function initMap() {
  const location = { lat, lng }; // Ensure lat & lng are defined globally

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
  });

  // Default marker (unchanged)
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  // Outer glow circle
  const glowCircle = new google.maps.Circle({
    strokeColor: "rgba(0,0,0,0)",
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: "rgba(14, 200, 233, 0.45)", // soft black glow
    fillOpacity: 0.4,
    map: map,
    center: location,
    radius: 5000, // Adjust for size of glow
    zIndex: 1, // Ensure it's under the marker
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `<h4>${listings.title}</h4><p>Exact location will be provided after booking!</p>`,
  });

  // Show InfoWindow on hover
  marker.addListener("mouseover", () => {
    infoWindow.open(map, marker);
  });

  // Hide InfoWindow when mouse leaves
  marker.addListener("mouseout", () => {
    infoWindow.close();
  });
}
