function increaseRange(range) {
  function nextInt(previous, current) {
    do {
      previous++
    }
    while (!String(previous).endsWith(current))
    return previous;
  }

  function parseValue(item) {
    var itemSplit = item.split(/-|:|\.\./)
    itemSplit.length > 1 ? rangeItem(itemSplit) : singleItem(itemSplit)
  }

  function singleItem(itemSplit) {
    list.push(nextInt(previous, itemSplit[0]))
  }

  function rangeItem(itemSplit) {
    var start = nextInt(previous, itemSplit[0])
    var end = nextInt(start, itemSplit[1])
    var step = itemSplit.length > 2 ? parseInt(itemSplit[2]) : 1
    for (; start <= end; start += step) {
      list.push(start)
    }
  }

  var splits = range.split(",")
  var list = []
  var previous = 0

  for (item in splits) {
    parseValue(splits[item])
    previous = list[list.length-1]
  }
  return list.join(" ")
}

//Test cases
console.log(increaseRange("1,3,7,2,4,1") === "1 3 7 12 14 21")
console.log(increaseRange("1-3,1-2") === "1 2 3 11 12")
console.log(increaseRange("1:5:2") === "1 3 5")
console.log(increaseRange("104-2") === "104 105 106 107 108 109 110 111 112")
console.log(increaseRange("104..02") === "104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202")
console.log(increaseRange("545,64:11") === "545 564 565 566 567 568 569 570 571 572 573 574 575 576 577 578 579 580 581 582 583 584 585 586 587 588 589 590 591 592 593 594 595 596 597 598 599 600 601 602 603 604 605 606 607 608 609 610 611")
