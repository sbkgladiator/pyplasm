var h=126;
var floor0=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[10]]);

var floor1=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[-h,10]]);
var floor2=SIMPLEX_GRID([[-80,651-80],[-60,402-60],[-h*2,10]]);
var floor3=STRUCT([SIMPLEX_GRID([[-80,13,-360+13,651-80-360-13],[-60,402-60],[-h*3,10]]),SIMPLEX_GRID([[-80,651-80],[-60,16,16+60-396,402-396],[-h*3,10]])]);
var floor4=STRUCT([SIMPLEX_GRID([[-80,-360,651-80-360],[-60,402-60],[-h*4,10]]),SIMPLEX_GRID([[-80,651-80],[-335,402-335],[-h*4,10]])]);

DRAW(STRUCT([floor1,floor0,floor2,floor3,floor4]));
