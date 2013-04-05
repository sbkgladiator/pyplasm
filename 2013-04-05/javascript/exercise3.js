var east=R([1,2])(PI/2)(SIMPLEX_GRID([[-p1.x,p5.x-p1.x],[-h,h*3]]));
var north=R([0,2])(-PI/2)(SIMPLEX_GRID([[-h,h*3],[-p1.y,q7.y-p1.y]]));
var south=T([0])([p5.x])(R([0,2])(-PI/2)(SIMPLEX_GRID([[-h,h*3],[-p1.y,q7.y-p1.y]])));
var west=T([1])([q7.y])(R([1,2])(PI/2)(SIMPLEX_GRID([[-p1.x,p5.x-p1.x],[-h,h*3]])));
