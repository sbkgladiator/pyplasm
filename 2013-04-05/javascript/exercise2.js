function point2D(x,y){
this.x=x;
this.y=y;}

var a=new point2D(80,60)
var b=new point2D(651,60)
var c=new point2D(651,402)
var d=new point2D(80,402)
var h=126;
var r=6.5;
var floor0=SIMPLEX_GRID([[-154,651-154],[-178,402-178],[10]]);

var floor1=STRUCT([SIMPLEX_GRID([[-80,651-80],[-60,156-60,-242+156,333-242],[-h,10]]),SIMPLEX_GRID([[-80,300-80,-381+300,651-381],[-156,242-156],[-h,10]]),SIMPLEX_GRID([[-22,141-22,-388+141,651-388],[-333,d.y-333],[-h,10]])]);

var floor2=STRUCT([SIMPLEX_GRID([[-80,651-80],[-60,348-60],[-h*2,10]]),SIMPLEX_GRID([[-80,140-80,-318+140,c.x-318],[-348,d.y-348],[-h*2,10]])]);
var floor3=STRUCT([SIMPLEX_GRID([[-360,651-360],[-60,402-60],[-h*3,10]]),SIMPLEX_GRID([[-80,651-80],[-396,404-396],[-h*3,10]])]);
var floor4=STRUCT([SIMPLEX_GRID([[-80,-360,651-80-360],[-60,402-60],[-h*4,10]]),SIMPLEX_GRID([[-80,651-80],[-335,402-335],[-h*4,10]])]);

DRAW(STRUCT([floor1,floor0,floor2,floor3,floor4]));
