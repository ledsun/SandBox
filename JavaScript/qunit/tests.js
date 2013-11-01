test("hello test", function() {
	ok(1 == "1", "passed!");
});

window.fuga = 1;
test("global check", function() {
	window.hoge = 1;
	delete window.fuga;
	ok(true); //at least one assertion is necessary.
})

test("a basic test example", function() {
	var value = "hello";
	equal(value, "hello", "We expect value to be hello");
});

test("ok test", function() {
	ok(true, "true succeeds");
	ok("non-empty", "non-empty string succeeds");

	ok(false, "false fails");
	ok(0, "0 fails");
	ok(NaN, "NaN fails");
	ok("", "empty string fails");
	ok(null, "null fails");
	ok(undefined, "undefined fails");
});

test("equal test", function() {
	equal(0, 0, "Zero, Zero; equal succeeds");
	equal("", 0, "Empty, Zero; equal succeeds");
	equal("", "", "Empty, Empty; equal succeeds");

	equal("three", 3, "Three, 3; equal fails");
	equal(null, false, "null, false; equal fails");
});

test("strict equal test", function() {
	strictEqual(0, 0, "Zero, Zero; strict equal succeeds");

	strictEqual("", 0, "Empty, Zero; strict equal failss");
	strictEqual("0", 0, "String Zero, Number Zero; strict equal failss");
});

test("deepEqual test", function() {
	var obj = {
		foo: "bar"
	};

	deepEqual(obj, {
		foo: "bar"
	}, "Two objects can be the same in value");
});


test("throws", function() {
	throws(
		function() {
			throw "error"
		},
		"throws with just a message, no expected"
	);
});