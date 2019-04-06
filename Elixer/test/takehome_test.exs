defmodule TakehomeTest do
  use ExUnit.Case
  doctest Takehome

  test "test1 [2, 2]" do
    IO.puts "for x = 2 & y = 2 the answer is #{Takehome.answer("lib/takehome/test1.txt")}"
    assert Takehome.answer("lib/takehome/test1.txt") == '5'
  end
  
  test "test2 [2, 4]" do
    IO.puts "for x = 2 & y = 4 the answer is #{Takehome.answer("lib/takehome/test2.txt")}"
    assert Takehome.answer("lib/takehome/test2.txt") == '12'
  end
  
  test "test3 [4, 1]" do
    IO.puts "for x = 4 & y = 1 the answer is #{Takehome.answer("lib/takehome/test3.txt")}"
    assert Takehome.answer("lib/takehome/test3.txt") == '10'
  end
  
  test "test4 [4, 2]" do
    IO.puts "for x = 4 & y = 2 the answer is #{Takehome.answer("lib/takehome/test4.txt")}"
    assert Takehome.answer("lib/takehome/test4.txt") == '14'
  end
  
  test "test5 [100000, 100000]" do
    IO.puts "for 100000, 100000 the answer is #{Takehome.answer("lib/takehome/test5.txt")}"
    assert Takehome.answer("lib/takehome/test5.txt") == '19999800001'
  end
end
