/*

Memory = STACK + HEAP

STACK = [a=0x0010, b=0x98920, c=0x122130]
HEAP = [d="rohit"] (continuous memory allocation requires long size not possible in stack)

================== MEMORY ALLOCATION ==================
for all data(primitive + non primitive) memory is allocated in HEAP, address of data is stored in STACK
HEAP-->>>
[
  1 -->> 0x111111(suppose address)
  2 -->> 0x22222
  3 -->> 0x333333


  .... so on..
  true -->> 0x11true
  false -->> 0x00false
  null  -->> 0x00null
  undefined -->> 0x00und

  so that these do not need to be created again and again in memory
]

when program start
heap = [ true false null undefined ]



*/


