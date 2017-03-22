package com.locadora.controller;

import javax.inject.Inject;

import com.locadora.model.entity.Automovel;
import com.locadora.model.repository.AutomovelRepository;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.serialization.gson.WithoutRoot;
import br.com.caelum.vraptor.view.Results;

@Controller
@Path("/automoveis")
public class AutomovelController {
	@Inject
	private Result result;
	@Inject
	private AutomovelRepository automovelRepository;
	
	/**
	 * CDI eyes only
	 * @deprecated
	 */
	public AutomovelController(){}

	@Get(value={"/", ""})
	public void buscarTodos() {
		result.use(Results.json()).withoutRoot().from(automovelRepository.buscarTodos()).serialize();
	}

	@Get("/{automovel.id}")
	public void buscarPorId(Automovel automovel) {
		result.use(Results.json()).withoutRoot().from(automovelRepository.buscarPorId(automovel.getId())).serialize();
	}

	@Post("")
	@Consumes(value = "application/json", options = WithoutRoot.class)
	public void cadastrar(Automovel automovel) {
		result.use(Results.json()).withoutRoot().from(automovelRepository.cadastrar(automovel)).serialize();
	}

	@Put("/{automovel.id}")
	@Consumes(value = "application/json", options = WithoutRoot.class)
	public void atualizar(Automovel automovel) {
		result.use(Results.json()).withoutRoot().from(automovelRepository.atualizar(automovel)).serialize();
	}

	@Delete("/{automovel.id}")
	public void remover(Automovel automovel) {
		result.use(Results.json()).withoutRoot().from(automovelRepository.remover(automovel.getId())).serialize();
	}
}
