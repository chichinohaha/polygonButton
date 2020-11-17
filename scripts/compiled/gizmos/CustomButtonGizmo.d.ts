declare const SuperGizmo: typeof superGizmo;
declare class CustomButtonGizmo extends SuperGizmo {
    draw(): void;
    onCircleTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void;
    onCircleTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void;
    onCircleTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void;
    onLineTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void;
    onLineTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void;
    onLineTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void;
    onRectTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void;
    onRectTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void;
    onRectTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void;
    onPathTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void;
    onPathTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void;
    onPathTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void;
}
