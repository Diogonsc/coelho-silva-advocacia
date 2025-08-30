import lawyer1 from '@/assets/lawyer-portrait-1.jpg';
import lawyer2 from '@/assets/lawyer-portrait-2.jpg';
import { Scale, GraduationCap, Award, MapPin } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dr. Ricardo Coelho',
      role: 'Sócio Fundador',
      specialization: 'Especialista em Direito Criminal e Tribunal do Júri',
      image: lawyer1,
      credentials: [
        'OAB/RJ 98.765',
        'Pós-graduação em Ciências Criminais',
        'Especialização em Tribunal do Júri',
        '15+ anos de experiência'
      ],
      bio: 'Advogado criminalista com vasta experiência em defesa criminal. Especialista em Tribunal do Júri com centenas de casos defendidos com sucesso.'
    },
    {
      name: 'Dra. Fernanda Silva',
      role: 'Sócia',
      specialization: 'Especialista em Recursos Criminais e Habeas Corpus',
      image: lawyer2,
      credentials: [
        'OAB/RJ 87.432',
        'Mestrado em Direito Penal',
        'Especialização em Recursos',
        '12+ anos de experiência'
      ],
      bio: 'Advogada criminalista especializada em recursos criminais e writs constitucionais. Reconhecida expertise em Direito Penal e Processual Penal.'
    }
  ];

  return (
    <section id="equipe" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Nossa Equipe
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Profissionais experientes e comprometidos com a excelência na defesa criminal
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-elegant p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  {/* Photo */}
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground font-medium">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {member.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{credential}</span>
                      </div>
                    ))}
                  </div>

                  {/* Icons */}
                  <div className="flex justify-center gap-4 text-primary/60">
                    <Scale className="h-5 w-5" />
                    <GraduationCap className="h-5 w-5" />
                    <Award className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Info */}
          <div className="bg-gradient-to-r from-primary/5 via-trust/5 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <MapPin className="h-6 w-6" />
              <h3 className="text-2xl font-serif font-bold">
                Localização
              </h3>
            </div>
            
            <p className="text-xl text-foreground mb-2">
              Rua Auristela, 450-B
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Santa Cruz - Rio de Janeiro - RJ
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <span>Registro OAB/RJ</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-primary/30"></div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Certificações Profissionais</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-primary/30"></div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>Formação Continuada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;