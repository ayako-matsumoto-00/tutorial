square = (x) -> x * x
cube = (x) -> square(x) * x

fill = (contain , liquid = "coffee") ->
  "Filling the #{container} with #{liquid}…"