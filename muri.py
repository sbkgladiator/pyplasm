from pyplasm import *
###
m1=ROTATE([1,3])(PI/2)(MKPOL([ [[0,0],[0,4],[6,2],[4,4],[4,0]] ,[[1,2,3,4,5]],None]));
m3=ROTATE([2,3])(PI/2)(MKPOL([ [[0,0],[0,4],[6,4],[6,0]] ,[[1,2,3,4]],None]));
m2=STRUCT([T(2)(4),(m3)]);
m4=STRUCT([T(1)(6),(m1)]);
a=[0,0];
b=[0,4];
d=[4,0];
c=[4,4];
e=[2,6];
tetto=[[0,0],[-2,2],[-2.1,2],[-0.1,0]];
tegole =MKPOL([tetto,[[1,2,3,4]],None]);
tetto2=[[-2,2],[0,4],[-0.1,4],[-2.1,2]];
sopra=STRUCT([T(3)(4),(ROTATE([1,3])(-PI/2)(COLOR([1,0,0])(PROD([tegole,Q(6)]))))]);
tegole2 =MKPOL([tetto2,[[1,2,3,4]],None]);
sopra2=STRUCT([T(3)(4),(ROTATE([1,3])(-PI/2)(COLOR([1,0,0])(PROD([tegole2,Q(6)]))))]);
piano = COLOR([0,1,0])(MKPOL([[[-10,-10],[10,10],[10,-10],[-10,10]],[[1,2,3,4]],None]));
dom1D = INTERVALS ( 1 ) ( 1 )
dom3D = INSR ( PROD ) ( [ INTERVALS ( 8 * PI ) ( 240 ) , dom1D , dom1D ] );
def spiral1 ( p ) :
	alpha ,r , h = p;
	return [ r * COS ( alpha ) , r * SIN ( alpha ) , alpha / ( 2 * PI ) ];
def spiral2 ( p ) :
	alpha ,r , h = p;
	return [ r * COS ( alpha ) , r * SIN ( alpha ) , alpha / ( 2 * PI ) + 0.1 ];
obj = MAP ( BEZIER ( S3 ) ( [ spiral1 , spiral2 ] ) ) ( dom3D );
blocco=STRUCT([m1,m2,m3,m4,piano,obj,sopra,sopra2]);

###
VIEW(blocco);
