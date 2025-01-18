{
  pkgs ? import <nixpkgs> { },
}:
with pkgs;
mkShell {
  buildInputs = [
    nodejs_23
    yarn
  ];

  shellHook = "yarn set version berry";

}
