import { Component, Input } from "@angular/core";
import { Building, Detail } from "../models/building.model";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  details: Detail[] = [];

  @Input() building: Building = {
    Name: "",
    Alerts: {
      high: {
        count: 0,
      },
      med: {
        count: 0,
      },
      low: {
        count: 0,
      },
    },
    Savings: "",
    Uptime: "",
    Power: "",
  };

  ngOnChanges() {
    this.details = [];
    if (this.building.Alerts.high.details)
      this.details = this.building.Alerts.high.details;

    if (this.building.Alerts.med.details)
      this.details = [...this.details, ...this.building.Alerts.med.details];

    if (this.building.Alerts.low.details)
      this.details = [...this.details, ...this.building.Alerts.low.details];
  }
}
