defmodule Takehome.Traverse do
  
  def traverseRows(curCell, curRow, maxRow) when curRow ==maxRow, do: curCell

  def traverseRows(curCell, curRow, maxRow) do
    nextRow = curRow + 1
    nextCell = curCell + nextRow - 1
    traverseRows(nextCell, nextRow, maxRow)
  end

  def traverseCol(curCell, curCol, maxCol, incAmt) when curCol == maxCol, do: curCell
  
  def traverseCol(curCell, curCol, maxCol, incAmt) do
    nextCell = curCell + incAmt
    nextIncAmt = incAmt + 1
    nextCol = curCol + 1
    traverseCol(nextCell, nextCol, maxCol, nextIncAmt)
  end
end