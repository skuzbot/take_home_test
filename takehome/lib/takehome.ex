defmodule Takehome do

  def answer(path) do
    x = Takehome.GetCoordinates.getX(path)
    y = Takehome.GetCoordinates.getY(path)
    IO.puts "x is #{x} and y is #{y}"

    colOneAtRowY = Takehome.Traverse.traverseRows(1, 1, y)

    incAmt = y + 1

    Integer.to_charlist(Takehome.Traverse.traverseCol(colOneAtRowY, 1, x, incAmt))
  end
  


end

# "lib/takehome/sample.txt"
# "lib/takehome/sample2.txt"