{
  pkgs ? import <nixpkgs> { },
}:
with pkgs;
mkShell {
  buildInputs = [
    nodejs-slim_23
    yarn
  ];
}
