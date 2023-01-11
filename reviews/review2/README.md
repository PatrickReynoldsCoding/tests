DAW plugins
filters to edit

make a bandpass filter

3 inputs

1. music track (array of frequencies)
2. lower limit (int)
3. Upper Limit (int)

Bandpass filter:
Finds frequencies lower than the lower limit and sets to the lower limit

Acceptance criteria

```

1.
[40, 50, 60, 70],40,1000
=> [40, 50, 60, 70]

.2
[10, 20, 30, 40],40,1000
=> [40, 40, 40, 40]

.3
[2000, 3000, 4000],40,1000
=> [1000, 1000, 1000]

.4
[60,10,45,60,1500],40,1000
[60,40,45,60,1000]





EDGE CASES
Wrong data types
.
empty array



```
