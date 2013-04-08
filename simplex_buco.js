function point2D(x,y){
this.x=x;
this.y=y;}

function hole(a,b,c,d,e,f,g,h,p){
return STRUCT([SIMPLEX_GRID([[-a.x,e.x-a.x,-f.x+e.x,b.x-f.x],[-a.y,d.y],[p.y]]),SIMPLEX_GRID([[-e.x,f.x-e.x],[-a.y,e.y-a.y,-h.y+e.y,d.y-h.y],[p.y]])]);
}


var a=new point2D(1,0)
var b=new point2D(100,0)
var c=new point2D(100,100)
var d=new point2D(1,100)
var e=new point2D(20,60)
var f=new point2D(60,60)
var g=new point2D(60,80)
var h=new point2D(20,80)
var p=new point2D(0,12)

DRAW(hole(a,b,c,d,e,f,g,h,p))
