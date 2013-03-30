from pyplasm import *

m1=ROTATE([1,3])(PI/2)(MKPOL([ [[0,0],[0,4],[4,4],[4,0]] ,[[1,2,3,4]],None]));
m2=ROTATE([2,3])(PI/2)(MKPOL([ [[0,0],[0,4],[6,4],[6,0]] ,[[1,2,3,4]],None]));
blocco=STRUCT([m1,m2]);
VIEW(blocco);
