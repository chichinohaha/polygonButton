// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html



const {ccclass, property,inspector} = cc._decorator;

@ccclass
@inspector("packages://ui-extensions/compiled/inspectors/CustomButtonInspector.js")
export default class CustomButton extends cc.Button {

    @property()
    isSoundEffectButton=false
    @property(cc.AudioClip)
    soundEffect:cc.AudioClip=null;
    @property({slide:true,min:0,max:1,step:0.1})
    soundVolume=1
    @property({animatable:false})
    
    public get isPolygonButton() : boolean {
        return this._isPolygonButton
    }
    
    public set isPolygonButton(v : boolean) {
        if(this.polygon.length==0)
        {
            this.resetPolygon()
        }
        this._isPolygonButton = v;
    }
    @property({animatable:false,visible:false})
    protected set _resetPolygon(v)
    {
        if(v)
        {
            this.resetPolygon()
        }
    }
    @property({animatable:false})
    _isPolygonButton=false
    @property([cc.Vec2])
    polygon:cc.Vec2[]=[]
    resetPolygon(){
        const box=this.node.getBoundingBox()
        const xmax=box.xMax-this.node.x
        const xmin=box.xMin-this.node.x
        const ymax=box.yMax-this.node.y
        const ymin=box.yMin-this.node.y
        this.polygon=[cc.v2(xmin,ymin),cc.v2(xmax,ymin),cc.v2(xmax,ymax),cc.v2(xmin,ymax)]
    }
    onLoad()
    {
        if(this.isPolygonButton)
        {  //@ts-ignore
            if (this.node._touchListener) {
                  //@ts-ignore
                this.node._touchListener.setSwallowTouches(false);
            }
        }
    }
    _onTouchBegan(event:cc.Event.EventTouch)
    {
        let isValid=true
        if(this.isPolygonButton&&this.polygon.length>=3)
        {
            const location=event.getLocation()
            const polygon=this.polygon.map(v=>this.node.convertToWorldSpaceAR(v))
            isValid=cc.Intersection.pointInPolygon(location,polygon)
        }
        if(isValid)
        {
            if(this.isSoundEffectButton&&this.soundEffect)
            {
                cc.audioEngine.play(this.soundEffect, false, this.soundVolume)
            }
            //@ts-ignore
            super._onTouchBegan(event)
        }
    }
}
