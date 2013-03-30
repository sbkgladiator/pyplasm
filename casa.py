from pyplasm import * 
###
a=[0,0];
b=[0,4];
d=[4,0];
c=[4,4];
e=[2,6];
piano = COLOR([0,1,0])(MKPOL([[[-10,-10],[10,10],[10,-10],[-10,10]],[[1,2,3,4]],None]));
verts = [a,b,c,d,e];
cells = ([[1,2,3,4,5]]);
casa = MKPOL([verts,cells,None]);
porta = CUBOID([1,3]);
finestra = CUBOID([1,1.5]);
Tp = T(1)(1.5);
Tf=T([1,2])([2.75,1.5]);
tetto=[e,b,[2,6.1],[0,4.1]];
tegole =MKPOL([tetto,[[1,2,3,4]],None]);
tetto2=tetto=[e,c,[2,6.1],[4,4.1]];
sopra=COLOR([1,0,0])(PROD([tegole,Q(4)]));
tegole2 =MKPOL([tetto2,[[1,2,3,4]],None]);
sopra2=COLOR([1,0,0])(PROD([tegole2,Q(4)]));
figura = DIFFERENCE([casa,Tp(porta),Tf(finestra)]);
modello = COLOR([1,0.9,0.85])(PROD([figura,Q(4)]));
cam=CUBOID([0.5,6,0.5])
casetta=STRUCT([modello,sopra,sopra2,cam]);
disegno=STRUCT([ROTATE([2,3])(PI/2)(casetta),piano]);
###
VIEW(disegno);
###

