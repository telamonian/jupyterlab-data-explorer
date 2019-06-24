# JupyterLab Data Explorer

[![Stability Experimental](https://img.shields.io/badge/stability-experimental-red.svg)](https://img.shields.io/badge/stability-experimental-red.svg)

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-data-explorer/master)

We are currently building a data registry for JupyterLab [#5548](https://github.com/jupyterlab/jupyterlab/issues/5548). The idea is to show users datasets that have been registered and allow users to view those datasets, by relying on a series of data converters.

## Development

```bash
conda create -n jupyterlab-data-explorer -c conda-forge python=3.6
conda activate jupyterlab-data-explorer

pip install --pre jupyterlab
yarn
yarn run build


jupyter labextension link ./dataregistry --no-build
jupyter labextension link ./dataregistry-extension

jupyter lab
```
