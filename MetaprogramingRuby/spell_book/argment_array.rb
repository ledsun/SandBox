def my_method(*args)
  args.map {|arg| arg.reverse}
end

p my_method('abc', 'xyz', '123')

