# #293 Defusing the bomb [Easy][2016-11-21]

Original thread [Defusing the bomb](https://www.reddit.com/r/dailyprogrammer/comments/5e4mde/20161121_challenge_293_easy_defusing_the_bomb/)

## Description

To disarm the bomb you have to cut some wires. These wires are either white, black, purple, red, green or orange.

The rules for disarming are simple:

```
If you cut a white cable you can't cut white or black cable.
If you cut a red cable you have to cut a green one
If you cut a black cable it is not allowed to cut a white, green or orange one
If you cut a orange cable you should cut a red or black one
If you cut a green one you have to cut a orange or white one
If you cut a purple cable you can't cut a purple, green, orange or white cable
```

If you have anything wrong in the wrong order, the bomb will explode.

There can be multiple wires with the same colour and these instructions are for one wire at a time. Once you cut a wire you can forget about the previous ones.

## Input

You will recieve a sequence of wires that where cut in that order and you have to determine if the person was succesfull in disarming the bomb or that it blew up.

Input 1

```
white
red
green
white
```

Input 2

```
white
orange
green
white
```

## Output

You should output a string of all the numbers separated by a space

Output 1
```
"Bomb defused"
```

Output 2
```
"Boom"
```