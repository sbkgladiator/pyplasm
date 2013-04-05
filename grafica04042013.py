from pyplasm import *

###quote sulla direzione degli assi x,y,z

foundations = INSR(PROD)(AA(QUOTE)([[8,-30,8,-30,8,-12],[8,-30,8],[6]]))



pillars = INSR(PROD)(AA(QUOTE)([[-3,2,-36,2,-36,2,-18,2],[-3,2,-36,2],[-7.4,1.4,23.6,1.4,23.6,1.4]]))


horiz_partitions = INSR(PROD)(AA(QUOTE)([[-3,2,36,2,36,2,18,2],[9,2,36,2,9],[-6,1.4,-23.6,1.4,-23.6,1.4]]))
hor=INSR(PROD)(AA(QUOTE)([[-3,2,36,2,36,2,18,2],[9,2,36,2,9],[-6,1.4,-23.6,1.4,-23.6,1.4]]))

building = STRUCT([foundations,pillars,T(2)(-6)(horiz_partitions)])


###gradino in 2D
step2D = MKPOL([[[0,0],[0,2.65],[2.66,2.5/2],[2.66,2.65]],[[1,2,3,4]],None])

###gradino in 3D 
step3D = MAP([S1,S3,S2])(PROD([step2D,Q(9)]))
ramp = STRUCT(NN(10)([step3D,T([1,3])([2.66,2.5/2])]))


ramp1 = T([1,2,3])([3+2+36+2+36+2+18,3+2+12,6])(R([1,2])(PI/2)(ramp))

ramp2 = T([1,2,3])([3+2+36+2+36+2,3+2+12+2.66*10,6+1.25*9])(R([1,2])(-PI/2)(ramp))
pian=INSR(PROD)(AA(QUOTE)([[-3,-2,-36,-2,-36,-2,18],[-17,-2.66*10,6],[-6,-1.25*10,1.4]]))
scala=T([3])([6+1.25*15])(STRUCT([ramp1,ramp2,pian]))
building = STRUCT([foundations,pillars,T(2)(-6)(horiz_partitions),ramp1,ramp2,pian,scala])
VIEW(building)
###VIEW(building)
GRID = COMP([INSR(PROD),AA(QUOTE)])
beams_x = GRID([[-3,2,36,2,36,2,18,2],[-3,2,-36,2],
    [-6,1.4,-23.6,1.4,-23.6,1.4]])
beams_y = GRID([[-3,2,-36,2,-36,2,-18,2],[-3,2,36,2],
    [-6,1.4,-23.6,1.4,-23.6,1.4]])
beams = STRUCT([beams_x,beams_y])
frame = STRUCT([beams])
###VIEW(beams)

###VIEW(POLYLINE([[0,0],[0,7]]))
