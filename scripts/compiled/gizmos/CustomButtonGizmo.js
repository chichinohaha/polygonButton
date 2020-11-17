"use strict";
//@ts-ignore
const SuperGizmo = Editor.require('packages://super-gizmo/compiled/gizmos/super-gizmo.js');
class CustomButtonGizmo extends SuperGizmo {
    draw() {
        const polygon = this.target.polygon;
        if (this.target.isPolygonButton && polygon.length > 0) {
            const fittedPoints = this.getFittedPositionArray(...polygon);
            this.getPath()
                .plot(this.getClosePathData(...fittedPoints));
            fittedPoints.forEach((point, drawIndex, arr) => {
                if (drawIndex != arr.length - 1) {
                    this.getLine(drawIndex)
                        .plot([point, arr[drawIndex + 1]]);
                    this.getTouchLine(drawIndex)
                        .plot([point, arr[drawIndex + 1]]);
                }
                else {
                    this.getLine(drawIndex)
                        .plot([point, arr[0]]);
                    this.getTouchLine(drawIndex)
                        .plot([point, arr[0]]);
                }
                this.getCircle(drawIndex)
                    .center(point[0], point[1]);
                this.getTouchCircle(drawIndex)
                    .center(point[0], point[1]);
            });
        }
    }
    onCircleTouchBegan(point, event, drawIndex, groupIndex, circle) {
        const polygon = this.target.polygon;
        if (event.ctrlKey) {
            if (polygon.length > 2) {
                polygon.splice(drawIndex, 1);
            }
            else {
                Editor.log(Editor.T('ui-extensions.dont-delete'));
            }
        }
    }
    onCircleTouchMoved(selectedPoint, dx, dy, event, drawIndex, groupIndex, circle) {
        const polygon = this.target.polygon;
        if (selectedPoint && polygon[drawIndex]) {
            polygon[drawIndex].x = selectedPoint.x + dx;
            polygon[drawIndex].y = selectedPoint.y + dy;
        }
    }
    onCircleTouchEnd(event, drawIndex, groupIndex, circle) {
    }
    onLineTouchBegan(point, event, drawIndex, groupIndex, line) {
        const polygon = this.target.polygon;
        polygon.splice(drawIndex + 1, 0, point);
    }
    onLineTouchMoved(selectedPoint, dx, dy, event, drawIndex, groupIndex, line) {
    }
    onLineTouchEnd(event, drawIndex, groupIndex, line) {
    }
    onRectTouchBegan(point, event, drawIndex, groupIndex, rect) {
    }
    onRectTouchMoved(selectedPoint, dx, dy, event, drawIndex, groupIndex, rect) {
    }
    onRectTouchEnd(event, drawIndex, groupIndex, rect) {
    }
    onPathTouchBegan(point, event, drawIndex, groupIndex, path) {
    }
    onPathTouchMoved(selectedPoint, dx, dy, event, drawIndex, groupIndex, path) {
    }
    onPathTouchEnd(event, drawIndex, groupIndex, path) {
    }
}
module.exports = CustomButtonGizmo;
