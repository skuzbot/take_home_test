defmodule Takehome.FileReader do
  def getXandY(path) do
    input = File.read!(path)
    |> String.split("\n")
    |> Enum.map(&String.to_integer/1)
  end
  
end