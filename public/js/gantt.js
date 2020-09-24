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


$(document).ready(function () {
    $(document).on('DOMNodeInserted', function (e) {
        if ($(e.target).hasClass('orbit-gizmo')) {
            // Model data in format for charts
            class ModelData {
                constructor(viewer) {
                    this._modelData = {};
                    this._viewer = viewer;
                }

                init(callback) {
                    var _this = this;

                    _this.getAllLeafComponents(function (dbIds) {
                        var count = dbIds.length;
                        dbIds.forEach(function (dbId) {
                            viewer.getProperties(dbId, function (props) {
                                props.properties.forEach(function (prop) {
                                    if (!isNaN(prop.displayValue)) return; // let's not categorize properties that store numbers

                                    // some adjustments for revit:
                                    prop.displayValue = prop.displayValue.replace('Revit ', ''); // remove this Revit prefix
                                    if (prop.displayValue.indexOf('<') == 0) return; // skip categories that start with <

                                    // ok, now let's organize the data into this hash table
                                    if (_this._modelData[prop.displayName] == null) _this._modelData[prop.displayName] = {};
                                    if (_this._modelData[prop.displayName][prop.displayValue] == null) _this._modelData[prop.displayName][prop.displayValue] = [];
                                    _this._modelData[prop.displayName][prop.displayValue].push(dbId);
                                })
                                if ((--count) == 0) callback();
                            });
                        })
                    })
                }

                getAllLeafComponents(callback) {
                    // from https://learnforge.autodesk.io/#/viewer/extensions/panel?id=enumerate-leaf-nodes
                    viewer.getObjectTree(function (tree) {
                        var leaves = [];
                        tree.enumNodeChildren(tree.getRootId(), function (dbId) {
                            if (tree.getChildCount(dbId) === 0) {
                                leaves.push(dbId);
                            }
                        }, true);
                        callback(leaves);
                    });
                }

                hasProperty(propertyName){
                    return (this._modelData[propertyName] !== undefined);
                }

                getLabels(propertyName) {
                    return Object.keys(this._modelData[propertyName]);
                }

                getCountInstances(propertyName) {
                    return Object.keys(this._modelData[propertyName]).map(key => this._modelData[propertyName][key].length);
                }

                getIds(propertyName, propertyValue) {
                    return this._modelData[propertyName][propertyValue];
                }
            }
            
            class GanttPanel {
                constructor(viewer) {
                    var _this = this;
                    this._viewer = viewer;
                    this._viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, (viewer) => {
                        _this.loadGantt(this_viewer);
                    });
                }

                loadGantt(viewer) {
                    var gantt = new Gantt("#gantt", tasks, {
                        header_height: 50,
                        column_width: 30,
                        step: 24,
                        view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
                        bar_height: 20,
                        bar_corner_radius: 3,
                        arrow_curve: 5,
                        padding: 18,
                        view_mode: 'Month',   
                        date_format: 'YYYY-MM-DD',
                        custom_popup_html: null,
                        on_click: function (task) {
                            console.log(task);
                            var viewer = NOP_VIEWER;
                            var modelData = new ModelData(viewer);
                            viewer.isolate(modelData.getIds("4D_Task_ID", task.id));
                        },
                        custom_popup_html: function(task) {
                            // the task object will contain the updated
                            // dates and progress value
                            return `
                            <div class="details-container" style="width: 300px; padding: 15px">
                                <h5>${task.name}</h5>
                                <p>Expected to finish by ${task.end}</p>
                                <p>${task.progress}% completed!</p>
                                <p>4D task ID: ${task.id}</p>
                            </div>
                            `;
                        }
                    });
                }

            }

            if (NOP_VIEWER === null || NOP_VIEWER === undefined) return;

            new GanttPanel(NOP_VIEWER);
        }
    }
});



