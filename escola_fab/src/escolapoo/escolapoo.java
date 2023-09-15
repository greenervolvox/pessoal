package escolapoo;

import curso.Disciplina;

public class escolapoo {
	public static void main(String[] args){
		Disciplina disciplina1 = new Disciplina();
		disciplina1.setNome("Modelagem");
		disciplina1.setCargaHoraria(-10);
		
		Disciplina disciplina2 = new Disciplina();
		disciplina2.setNome("Type Script");
		
		System.out.println(disciplina1.getNome());
		System.out.println(disciplina1.getCargaHoraria()); 
	}
}
