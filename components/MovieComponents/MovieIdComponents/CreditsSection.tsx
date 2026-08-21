import CreditsCard from "./CreditsCard";

interface CastMember {
    original_name: string;
    known_for_department: string;
    profile_path: string;
    popularity: number;
}

interface CrewMember {
    original_name: string;
    known_for_department: string;
    profile_path: string;
    popularity: number;
    role: string;
}

interface CreditsSectionProps {
    cast: CastMember[];
    crew: CrewMember[];
}

export default function CreditsSection({ cast, crew }: CreditsSectionProps) {
    const castPersons = cast.sort((a, b) => b.popularity - a.popularity).slice(0, 5);
    crew = crew.sort((a, b) => b.popularity - a.popularity)
    const crewCategory = ["Production", "Directing", "Sound", "Writing", "Visual Effects"]
    const personCategory = ["Producer", "Director", "Sound Artist", "Writer", "VFX Artist"]
    let crewPersons = [];

    for (let i = 0; i < crewCategory.length; i++) {
        let person = crew.find((a) => a.known_for_department === crewCategory[i]);
        if (person) {
            person.role = personCategory[i];
            crewPersons.push(person);
        }
    }


    return (
        <div className="mt-5">
            {castPersons.length>0 && <>
                <h4 className="font-semibold">Top Actors</h4>
                <div className="flex gap-5 py-3 w-full overflow-scroll hide-scrollbar">
                    {
                        castPersons.map((person) => (
                            <CreditsCard
                                key={person.original_name}
                                name={person.original_name}
                                role="Actor"
                                profilePath={person.profile_path} />
                        ))
                    }
                </div>
            </>
            }

            {
                crewPersons.length > 0 && <>
                    <h4 className="font-semibold">Crew Members</h4>
                    <div className="flex gap-5 py-3 w-full overflow-scroll hide-scrollbar">
                        {
                            crewPersons.map((person) => (
                                <CreditsCard
                                    key={person.original_name}
                                    name={person.original_name}
                                    role={person.role}
                                    profilePath={person.profile_path} />
                            ))
                        }
                    </div>
                </>
            }

        </div>
    )
}