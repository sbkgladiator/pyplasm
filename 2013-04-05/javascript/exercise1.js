var p1=(86,65)
var p2=(226,240)
var p3=(365,380)
var p4=(505,518)
var p5=(644,658)
var P5=(86,332)
var pq=(160,331)
###
var pil=EXTRUDE([126])(DISK(6,5)())
var quad=EXTRUDE([126])(SIMPLEX_GRID([[13],[13]]))
var pilla1=STRUCT([T([1])([100])(pil),T([1])([240])(pil),T([1])([380])(pil),T([1])([518])(pil),T([1])([658])(pil)])
var pilla2=T([0])([350-616])(STRUCT([T([1])([100])(pil),T([1])([240])(quad),T([1])([380])(quad),T([1])([518])(quad)]))
var pillars1=STRUCT([pilla1,pilla2])
DRAW(pillars1)
###
