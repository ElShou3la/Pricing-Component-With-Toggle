// Start The Spiner
let spiner = document.getElementById("spiner") as HTMLElement;
let ball = document.getElementById("ball") as HTMLElement;

spiner?.addEventListener("click", () => {
  if (ball?.classList.contains("ball")) {
    ball.classList.remove("ball");
    ball.classList.add("ball_move");
    spiner.style.cssText = "background-color:#8f93ea;";
  } else if (ball?.classList.contains("ball_move")) {
    ball.classList.remove("ball_move");
    ball.classList.add("ball");
    spiner.style.cssText = "background-color:#72749b;";
  }
});
// End The Spiner

// Start innering HTML
let plan_1 = <HTMLHeadElement>document.getElementById("plan-1");
let plan_2 = <HTMLHeadElement>document.getElementById("plan-2");
let plan_3 = <HTMLHeadElement>document.getElementById("plan-3");

spiner?.addEventListener("click", () => {
  if (ball?.classList.contains("ball_move")) {
    plan_1.innerHTML = " &dollar;199.99";
    plan_2.innerHTML = " &dollar;249.99";
    plan_3.innerHTML = " &dollar;399.99";
  } else {
    plan_1.innerHTML = "&dollar;19.99";
    plan_2.innerHTML = "&dollar;24.99";
    plan_3.innerHTML = "&dollar;39.99";
  }
});
