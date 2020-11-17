//@ts-ignore
const SuperGizmo: typeof superGizmo = Editor.require('packages://super-gizmo/compiled/gizmos/super-gizmo.js')
class CustomButtonGizmo extends SuperGizmo {
   

    draw(){
        const polygon:cc.Vec2[]=this.target.polygon  
        if(this.target.isPolygonButton&&polygon.length>0)
        {
            const fittedPoints=this.getFittedPositionArray(...polygon)
            
            this.getPath()
            .plot(this.getClosePathData(...fittedPoints))
            
            fittedPoints.forEach((point,drawIndex,arr)=>{
                if(drawIndex!=arr.length-1)
                {
                    this.getLine(drawIndex)
                    .plot([point,arr[drawIndex+1]])
                    this.getTouchLine(drawIndex)
                    .plot([point,arr[drawIndex+1]])

                }
                else{
                    this.getLine(drawIndex)
                    .plot([point,arr[0]])
                    this.getTouchLine(drawIndex)
                    .plot([point,arr[0]])
                    
                }
                this.getCircle(drawIndex)
                .center(point[0],point[1])
                this.getTouchCircle(drawIndex)
                .center(point[0],point[1])
               
            })
            
        }
    }
    onCircleTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void {
        const polygon:cc.Vec2[]=this.target.polygon  
        if(event.ctrlKey)
        {
            if(polygon.length>2)
            {
                polygon.splice(drawIndex,1)
            }
            else
            {
                Editor.log( Editor.T('ui-extensions.dont-delete'))
            }
        } 
    }
    
    onCircleTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void {
        const polygon:cc.Vec2[]=this.target.polygon  
        if(selectedPoint&&polygon[drawIndex])
        {
            polygon[drawIndex].x=selectedPoint.x+dx
            polygon[drawIndex].y=selectedPoint.y+dy
        }
        
     }
    onCircleTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, circle: MySvg.Circle): void {
       
    }
    onLineTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void {
        const polygon:cc.Vec2[]=this.target.polygon
        polygon.splice(drawIndex+1,0,point)
        
    }
    onLineTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void {
       
    }
    onLineTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, line: MySvg.Line): void {
       
    }
   
    onRectTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void {
        
    }
    onRectTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void {
       
    }
    onRectTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, rect: MySvg.Rect): void {
       
    }
    onPathTouchBegan(point: cc.Vec2, event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void {
       
    }
    onPathTouchMoved(selectedPoint: cc.Vec2, dx: number, dy: number, event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void {
       
    }
    onPathTouchEnd(event: MouseEvent, drawIndex: number, groupIndex: number, path: MySvg.Path): void {
       
    }
}
module.exports=CustomButtonGizmo
