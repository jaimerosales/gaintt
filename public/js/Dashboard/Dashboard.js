var charts = {};

$(document).ready(function () {
    $(document).on('DOMNodeInserted', function (e) {
        if ($(e.target).hasClass('orbit-gizmo')) {
            // to make sure we get the viewer, let's use the global var NOP_VIEWER
            if (NOP_VIEWER === null || NOP_VIEWER === undefined) return;
            new Dashboard(NOP_VIEWER, [
                new BarChart('Material'),
                new PieChart('Material')
            ])
            charts['Gantt'] = new GanttPanel(NOP_VIEWER, new GanttChart(tasks));
        }
    });
})

// Handles the Dashboard panels
class Dashboard {
    constructor(viewer, panels) {
        var _this = this;
        this._viewer = viewer;
        this._panels = panels;
        this.adjustLayout();
        this._viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, (viewer) => {
            _this.loadPanels();
        });
    }

    adjustLayout() {
        // this function may vary for layout to layout...
        // for learn forge tutorials, let's get the ROW and adjust the size of the 
        // columns so it can fit the new dashboard column, also we added a smooth transition css class for a better user experience
        var row = $(".row").children();
        $(row[0]).removeClass('col-sm-2').addClass('col-sm-2 transition-width');
        $(row[2]).removeClass('col-sm-10').addClass('col-sm-7 transition-width').after('<div class="col-sm-3 transition-width" id="dashboard"></div>');

    }

    loadPanels () {
        var _this = this;
        var data = new ModelData(this);
        data.init(function () {
            $('#dashboard').empty();
            _this._panels.forEach(function (panel) {
                // let's create a DIV with the Panel Function name and load it
                panel.load('dashboard', viewer, data);
            });
        });
    }
}

// Handles the Gantt chart in Gantt panel
class GanttPanel {
    constructor(viewer, gantt) {
        var _this = this;
        this._viewer = viewer;
        this._gantt = gantt;
        this.adjustLayout();
        this._viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, (viewer) => {
            _this.loadPanels();
        });
    }

    adjustLayout() {
        // this function may vary for layout to layout...
        // for learn forge tutorials, let's get the ROW and adjust the size of the 
        // columns so it can fit the new dashboard column, also we added a smooth transition css class for a better user experience
        var row = $(".row").children();
        var column = $(row[3]).children();
        $(column[0]).after('<div class="row transition-height" id="ganttPanel"></div>');

    }

    loadPanels () {
        var _this = this;
        var data = new ModelData(this);
        data.init(function () {
            $('#ganttPanel').empty();
            _this._gantt.load('ganttPanel', viewer, data);
        });
    }
}

var tasks = [
    {
        "id": "1",
        "name": "Preconstruction",
        "start": "2020-12-23",
        "end": "2020-12-27",
        "progress": "0",
        "dependencies": "",
        "custom_class": "bar-milestone"
    },
    {
        "id": "110",
        "name": "Level 1: Floor Slab / Foundation Edges",
        "start": "2020-12-30",
        "end": "2021-01-03",
        "progress": "0",
        "dependencies": "1",
        "custom_class": "bar-milestone"
    },
    {
        "id": "111",
        "name": "Level 1: Floor Slab / Foundations",
        "start": "2021-01-04",
        "end": "2021-01-12",
        "progress": "0",
        "dependencies": "110",
        "custom_class": "bar-milestone"
    },
    {
        "id": "120",
        "name": "Level 1: Columns",
        "start": "2021-01-13",
        "end": "2021-01-17",
        "progress": "0",
        "dependencies": "111",
        "custom_class": "bar-milestone"
    },
    {
        "id": "130",
        "name": "Level 1: Beams",
        "start": "2021-01-20",
        "end": "2021-01-29",
        "progress": "0",
        "dependencies": "120",
        "custom_class": "bar-milestone"
    },
    {
        "id": "140",
        "name": "Level 1: Joists",
        "start": "2021-01-30",
        "end": "2021-02-12",
        "progress": "0",
        "dependencies": "130",
        "custom_class": "bar-milestone"
    },
    {
        "id": "150",
        "name": "Level 1: Exterior Walls-Core",
        "start": "2021-01-31",
        "end": "2021-02-05",
        "progress": "0",
        "dependencies": "140",
        "custom_class": "bar-milestone"
    },
    {
        "id": "151",
        "name": "Level 1: Exterior Walls-EIFS",
        "start": "2021-02-06",
        "end": "2021-02-10",
        "progress": "0",
        "dependencies": "150",
        "custom_class": "bar-milestone"
    },
    {
        "id": "152",
        "name": "Level 1: Exterior Walls-Interior Finish",
        "start": "2021-04-04",
        "end": "2021-04-08",
        "progress": "0",
        "dependencies": "151",
        "custom_class": "bar-milestone"
    },
    {
        "id": "210",
        "name": "Level 2: Floor Deck",
        "start": "2021-02-13",
        "end": "2021-02-19",
        "progress": "0",
        "dependencies": "140",
        "custom_class": "bar-milestone"
    },
    {
        "id": "220",
        "name": "Level 2: Columns",
        "start": "2021-02-20",
        "end": "2021-02-26",
        "progress": "0",
        "dependencies": "210",
        "custom_class": "bar-milestone"
    },
    {
        "id": "230",
        "name": "Level 2: Beams",
        "start": "2021-02-27",
        "end": "2021-03-10",
        "progress": "0",
        "dependencies": "220",
        "custom_class": "bar-milestone"
    },
    {
        "id": "240",
        "name": "Level 2: Joists",
        "start": "2021-03-11",
        "end": "2021-03-24",
        "progress": "0",
        "dependencies": "230",
        "custom_class": "bar-milestone"
    },
    {
        "id": "250",
        "name": "Level 2: Exterior Walls",
        "start": "2021-03-25",
        "end": "2021-04-07",
        "progress": "0",
        "dependencies": "240",
        "custom_class": "bar-milestone"
    },
    {
        "id": "310",
        "name": "Level 3: Floor Deck",
        "start": "2021-03-25",
        "end": "2021-03-31",
        "progress": "0",
        "dependencies": "240",
        "custom_class": "bar-milestone"
    },
    {
        "id": "320",
        "name": "Level 3: Columns",
        "start": "2021-04-01",
        "end": "2021-04-07",
        "progress": "0",
        "dependencies": "310",
        "custom_class": "bar-milestone"
    },
    {
        "id": "330",
        "name": "Level 3: Beams",
        "start": "2021-04-08",
        "end": "2021-04-17",
        "progress": "0",
        "dependencies": "320",
        "custom_class": "bar-milestone"
    },
    {
        "id": "340",
        "name": "Level 3: Joists",
        "start": "2021-04-18",
        "end": "2021-05-01",
        "progress": "0",
        "dependencies": "330",
        "custom_class": "bar-milestone"
    },
    {
        "id": "350",
        "name": "Level 3: Exterior Walls",
        "start": "2021-05-02",
        "end": "2021-05-15",
        "progress": "0",
        "dependencies": "340",
        "custom_class": "bar-milestone"
    },
    {
        "id": "410",
        "name": "Level 4: Roof",
        "start": "2021-05-02",
        "end": "2021-05-08",
        "progress": "0",
        "dependencies": "340",
        "custom_class": "bar-milestone"
    },
    {
        "id": "510",
        "name": "All: Stairs",
        "start": "2021-04-18",
        "end": "2021-05-01",
        "progress": "0",
        "dependencies": "330",
        "custom_class": "bar-milestone"
    },
    {
        "id": "610",
        "name": "All: Windows & Doors",
        "start": "2021-05-16",
        "end": "2021-05-29",
        "progress": "0",
        "dependencies": "350",
        "custom_class": "bar-milestone"
    },
    {
        "id": "710",
        "name": "All: Curtain Walls",
        "start": "2021-05-16",
        "end": "2021-05-30",
        "progress": "0",
        "dependencies": "350",
        "custom_class": "bar-milestone"
    },
    {
        "id": "810",
        "name": "All: Railings",
        "start": "2021-05-02",
        "end": "2021-05-09",
        "progress": "0",
        "dependencies": "510",
        "custom_class": "bar-milestone"
    },
    {
        "id": "910",
        "name": "All: Interior Walls",
        "start": "2021-05-30",
        "end": "2021-06-10",
        "progress": "0",
        "dependencies": "610",
        "custom_class": "bar-milestone"
    }
];