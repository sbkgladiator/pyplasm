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

var east=T([1])([a.y+12]) (R([1,2])(PI/2) (STRUCT([SIMPLEX_GRID([[-364,b.x-364],[-h,195-h,-243+195,313-243,-362+313,431-362,-483+431,534-483],[12]]),SIMPLEX_GRID([[-a.x,359-a.x],[-h,429-h,-483+429,534-483],[12]]),SIMPLEX_GRID([[-354,366-354,-492+366,b.x-492],[-h,534-h],[12]]) ])));


var north=T([0])([b.x]) ( R([0,2])(-PI/2)(STRUCT([ SIMPLEX_GRID([[-h,534-h],[-a.y,13,-326+a.y+13,371-326,-387+371,402-387],[12]]), SIMPLEX_GRID([[-h,195-h,-243+195,313-243,-362+313,431-362,-483+431,534-483],[-a.y-13,347-a.y-13],[12]]), SIMPLEX_GRID([[-h,141-h,-268+141,283-268,-394+283,410-394,-516+410,534-516],[-371,387-371],[12]])  ]) ));



var south=T([0])([a.x]) (R([0,2])(-PI/2)( STRUCT([SIMPLEX_GRID([[-h,136-h,-243+136,266-243,-362+266,429-362,-483+429,534-483],[-a.y,d.y-a.y],[12]]), SIMPLEX_GRID([[-h,534-h],[-a.y,12,-333+72+6,6,-d.y+333+7,7],[12]]), SIMPLEX_GRID([[-243,429-243],[-333,67],[12]])  ])));

var west=T([1])([d.y]) (R([1,2])(PI/2)(STRUCT([ SIMPLEX_GRID([[-a.x,b.x-a.x-90],[91,-120+91,195-120,-243+195,313-243,-362+313,534-362],[12]]), SIMPLEX_GRID([[-a.x,b.x-119-a.x,-7,28,-7,77],[-313,362-313],[12]]), SIMPLEX_GRID([[-b.x+90,90],[-h,313-h,-362+313,534-362],[12]]) , SIMPLEX_GRID([[-a.x,b.x-255-a.x,-255+128,128],[-195,243-195],[12]]), SIMPLEX_GRID([[-a.x,b.x-205-a.x,-205+178,178-90],[-91,120-91],[12]])  ])));
DRAW(STRUCT([east,north,south,west]))
