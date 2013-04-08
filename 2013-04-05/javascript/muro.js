function point2D(x,y){
this.x=x;
this.y=y;}

var a=new point2D(80,60)
var b=new point2D(651,60)
var c=new point2D(651,402)
var d=new point2D(80,402)
var h=126;
var r=6.5;

var p1=new point2D(86,65)
var p2=new point2D(226,65)
var p3=new point2D(365,65)
var p4=new point2D(505,65)
var p5=new point2D(644,65)

var p6=new point2D(86,331)
var pq=new point2D(160,331)
var q7=new point2D(86,392)
var q8=new point2D(160,383)
var west=T([1])([d.y]) (R([1,2])(PI/2)(STRUCT([ SIMPLEX_GRID([[-a.x,b.x-a.x-90],[91,-120+91,195-120,-243+195,313-243,-362+313,534-362],[12]]), SIMPLEX_GRID([[-b.y+90,90],[-h,313-h,-362+313,534-362],[12]]), SIMPLEX_GRID([[77,-7,28,-7,b.x-119-a.x],[-313,362-313],[12]]) ]) ));

DRAW(west)
