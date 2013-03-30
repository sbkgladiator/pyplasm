from pyplasm import *

m1=ROTATE([1,3])(PI/2)(MKPOL([ [[0,0],[0,4],[4,4],[4,0]] ,[[1,2,3,4]],None]));
m2=STRUCT([T(2)(4),(ROTATE([2,3])(PI/2)(MKPOL([ [[0,0],[0,4],[6,4],[6,0]] ,[[1,2,3,4]],None])))]);
m3=ROTATE([2,3])(PI/2)(MKPOL([ [[0,0],[0,4],[6,4],[6,0]] ,[[1,2,3,4]],None]));
m4=STRUCT([T(1)(6),(ROTATE([1,3])(PI/2)(MKPOL([ [[0,0],[0,4],[4,4],[4,0]] ,[[1,2,3,4]],None])))]);
blocco=STRUCT([m1,m2,m3,m4]);
VIEW(blocco);
