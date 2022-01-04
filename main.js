var map = L.map('map').setView([37.76783, -122.44586], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG1kZWxvc28iLCJhIjoiY2trMGZ6aXJhMDVqdDJvbnI4YzM5MHRraiJ9.nOwnc18LqvUNErSlg4N0AA'}).addTo(map);

let mapList = [
    [37.78081, -122.44995, 'David, Jordan, Max', '310 Anza St'], [37.76783, -122.44586, 'Agnes, Skye, Lynn', '73 Delmar Street'],[37.79186, -122.40849, 'Ilana', '851 California Street'], [37.78847, -122.43075, 'Josh, Kevin, Charlie, Joshua', '2112a Pine St'], [37.79414, -122.41324, 'Maren, Sophie, Sooim', '1255 Taylor St'], [37.799620, -122.406520, 'Rawan, Tina, Jess, Lauren', '447 Green St'], [37.799360, -122.404790, 'Maria, Kim, Meher', '440 Vallejo St.']]


console.log(mapList)
for(let address of mapList){
    let marker = L.marker([address[0], address[1]]).addTo(map);
    marker.bindPopup(`
    <p><strong>${address[2]}</strong></p>
    <p>${address[3]}</p>
    `)
}