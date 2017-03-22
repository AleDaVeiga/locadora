package com.locadora.model.repository;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.enterprise.context.ApplicationScoped;

import com.locadora.model.entity.Automovel;

@ApplicationScoped
public class AutomovelRepository implements Serializable {
	private static final long serialVersionUID = 1L;
	private Map<Long, Automovel> automoveis = new HashMap<Long, Automovel>();

	public Collection<Automovel> buscarTodos() {
		return automoveis.values();
	}

	public Automovel buscarPorId(Long id) {
		return automoveis.get(id);
	}

	public Automovel cadastrar(Automovel automovel) {
		automovel.setId(buscaUltimoId());
		automoveis.put(automovel.getId(), automovel);
		return buscarPorId(automovel.getId());
	}

	public Automovel atualizar(Automovel automovel) {
		automoveis.put(automovel.getId(), automovel);
		return buscarPorId(automovel.getId());
	}

	public Automovel remover(Long id) {
		return automoveis.remove(id);
	}

	private Long buscaUltimoId() {
		Long ultimoId = 1L;
		for (Long id : automoveis.keySet()) {
			if (id >= ultimoId) {
				ultimoId = id + 1;
			}
		}
		return ultimoId;
	}
}
