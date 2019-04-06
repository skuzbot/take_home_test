defmodule TakehomeTest do
  use ExUnit.Case
  doctest Takehome

  test "greets the world" do
    assert Takehome.hello() == :world
  end
end
