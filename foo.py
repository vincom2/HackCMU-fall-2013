s = "HELLOhello"


print "Lines with splitlines():"
for line in s.splitlines():
	print " line:", line
 

print "Lines with splitLines(True):"
for line in s.splitlines(True):
	print " line:", line

