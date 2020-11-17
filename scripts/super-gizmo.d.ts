/**
 * @author zhangxin
 * @description 强大的gizmo父类super-gizmo
 * @version 0.0.1
 * 2020/10/20
 */
declare const fs: typeof fs;
declare const projectPath: string;
declare const profilePath: string;
declare const packagePath: string;

interface pointAlias {
    x: number;
    y: number;
}
/**
 * 集成了渲染点，线，路径，矩形的gizmo
 *
 */
declare abstract class superGizmo extends Editor.Gizmo {
    circles: MySvg.Circle[][];
    lines: MySvg.Line[][];
    paths: MySvg.Path[][];
    rects: MySvg.Rect[][];
    touchCircles: MySvg.Circle[][];
    touchLines: MySvg.Line[][];
    touchPaths: MySvg.Path[][];
    touchRects: MySvg.Rect[][];
    groups: MySvg.G[];
    defaultStartColor: string;
    defaultEndColor: string;
    defaultCircleFillColor: string;
    defaultCircleStrokeColor: string;
    defaultLineStrokeColor: string;
    defaultPathFillColor: string;
    defaultPathStrokeColor: string;
    defaultRectFillColor: string;
    defaultRectStrokeColor: string;
    defaultTouchFillColor: string;
    defaultTouchStrokeColor: string;
    defaultStrokeWidth: number;
    defaultLineDashArray: string;
    defaultCircleDashArray: string;
    defaultPathDashArray: string;
    defaultRectDashArray: string;
    defaultTouchStrokeWidth: number;
    defaultCircleRadius: number;
    defaultRectWidth: number;
    defaultRectHeight: number;
    defaultTouchCircleRadius: number;
    defaultTouchRectWidth: number;
    defaultTouchRectHeight: number;
    /**
      * 四舍五入取整
      * @param num
      */
    round(num: number): number;
    convertToNodePostion({ x, y }: {
        x?: number;
        y?: number;
    }): cc.Vec2;
    getBezierPathData(...points: [number, number][]): string;
    getClosePathData(...points: [number, number][]): string;
    /**拿到适配后的数字 */
    getFittedNumber(num: number): number;
    /**得到适配后的strokeData*/
    getFittedStrokeData({ width, color, opacity, linecap, linejoin, miterlimit, dasharray, dashoffset }?: {
        width?: number;
        color?: string;
        opacity?: number;
        linecap?: string;
        linejoin?: string;
        miterlimit?: number;
        dasharray?: string;
        dashoffset?: number;
    }): {
        width: number;
        color: string;
        opacity: number;
        linecap: string;
        linejoin: string;
        miterlimit: number;
        dasharray: string;
        dashoffset: number;
    };
    getFittedPosition(pointAlias: [number, number] | pointAlias): pointAlias;
    getFittedPositionArray(...pointArrayAlias: [number, number][] | pointAlias[]): [number, number][];
    getGroup(index?: number): MySvg.G;
    getCircle(drawIndex?: number, groupIndex?: number): MySvg.Circle;
    getTouchCircle(drawIndex?: number, groupIndex?: number): MySvg.Circle;
    getLine(drawIndex?: number, groupIndex?: number): MySvg.Line;
    getTouchLine(drawIndex?: number, groupIndex?: number): MySvg.Line;
    getPath(drawIndex?: number, groupIndex?: number): MySvg.Path;
    getTouchPath(drawIndex?: number, groupIndex?: number): MySvg.Path;
    getRect(drawIndex?: number, groupIndex?: number): MySvg.Rect;
    getTouchRect(drawIndex?: number, groupIndex?: number): MySvg.Rect;
    abstract onLineTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void;
    abstract onLineTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void;
    abstract onLineTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void;
    abstract onCircleTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void;
    abstract onCircleTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void;
    abstract onCircleTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void;
    abstract onRectTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void;
    abstract onRectTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void;
    abstract onRectTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void;
    abstract onPathTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void;
    abstract onPathTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void;
    abstract onPathTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void;
    clear(): void;
    draw(...any: any): void;
    render(): void;
    init(): void;
    resetData(): void;
    onCreateMoveCallbacks(): {
        /**
         * 在 gizmo 上按下鼠标时触发
         * @param x 按下点的 x 坐标
         * @param y 按下点的 y 坐标
         * @param event mousedown dom event
         */
        start: (x: number, y: number, event: MouseEvent, shape: MySvg.Shape) => void;
        /**
         * 在 gizmo 上按下鼠标移动时触发
         * @param dx 鼠标移动的 x 位移
         * @param dy 鼠标移动的 y 位移
         * @param event mousedown dom event
         */
        update: (dx: number, dy: number, event: MouseEvent, shape: MySvg.Shape) => void;
        /**
         * 在 gizmo 抬起鼠标时触发
         * @param event mousedown dom event
         */
        end: (event: MouseEvent, shape: MySvg.Shape) => void;
    };
    onCreateRoot(): void;
    onUpdate(): void;
}
