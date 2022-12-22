import { LiveAnnouncer } from "@angular/cdk/a11y";
import {
  AfterViewInit,
  Component,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { Building } from "../models/building.model";
import { buildings } from "./data";

@Component({
  selector: "app-energy",
  styleUrls: ["./energy.component.scss"],
  templateUrl: "./energy.component.html",
})
export class EnergyComponent implements AfterViewInit {
  @Output() building = new EventEmitter<Building>();
  displayedColumns: string[] = ["Name", "Alerts", "Savings", "Uptime", "Power"];
  dataSource = new MatTableDataSource(buildings);
  clickedRow = new Set<Building>();

  clickBuilding = (row: Building) => {
    this.building.emit(row);
  };

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
}
