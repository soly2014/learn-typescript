import { User } from "./User";
declare let google: any;

export interface Mappable {
	location: { lat: number; lng: number };
}

export class CustomMap {
	private map: google.maps.Map; // type here is an instance from google.maps.Map

	constructor(divId: string) {
		this.map = new google.maps.Map(document.getElementById(divId), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8
		});
	}
	addUserMarker(user: User): void {
		new google.maps.Marker({
			map: this.map,
			position: {
				lat: user.location.lat,
				lng: user.location.lng
			}
		});
	}
}
