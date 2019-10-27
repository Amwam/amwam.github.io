workflow "Main Build" {
  on       = "push"

  resolves = [
    "Lint",
    "Prettier"
  ]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  needs = "Build"
  uses  = "actions/npm@master"
  args  = "run tslint"
}

action "Prettier" {
  needs = "Build"
  uses  = "actions/npm@master"
  args  = "run prettier-check"
}
