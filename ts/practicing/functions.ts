function test(flag?: boolean) {
  if (flag === true) {
    return { flagIs: "true" };
  } else {
    return { flagIs: "false", option: 100 };
  }
}
