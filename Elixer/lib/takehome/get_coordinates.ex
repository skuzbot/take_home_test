defmodule Takehome.GetCoordinates do

  import Takehome.FileReader

  def getX(path) do
    input = Takehome.FileReader.getXandY(path)
    x = hd(input)
  end

  def getY(path) do
    input = Takehome.FileReader.getXandY(path)
    input = List.delete_at(input, 0)
    y = hd(input)
  end
end