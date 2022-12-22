import { Component } from "@angular/core";

import { Building } from "./models/building.model";
import { buildings } from "./energy/data";

interface Link {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "energo";

  currentBuilding: Building = buildings[0];

  links: Link[] = [
    { name: "Dashboard", url: "/", icon: "dashboard" },
    { name: "Account", url: "/", icon: "account_box" },
  ];

  onClickedBuilding(eventData: Building) {
    this.currentBuilding = eventData;
  }
}
