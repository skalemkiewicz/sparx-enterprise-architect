const SRS_STRUCTURE = [
    {
        "object": "package",
        "name": "Software Requirements Specification",
        "contents": [
            {
                "object": "package",
                "name": "Front Matter",
                "contents": [
                    {
                        "object": "package",
                        "name": "Cover",
                        "instructions": [
                            "The document shall include a title page containing, as applicable: document number; volume number; version/revision indicator; security markings or other restrictions on the handling of the document; date; document title; name, abbreviation, and any other identifier for the system, subsystem, or item to which the document applies; contract number; CDRL item number; organization for which the document has been prepared; name and address of the preparing organization; and distribution statement."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Revision Summary"
                    },
                    {
                        "object": "package",
                        "name": "Table of Contents",
                        "instructions":[
                            "The document shall contain a table of contents providing the number, title, and page number of each titled paragraph, figure, table, and appendix."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Scope",
                "instructions": [
                    "This section shall be divided into the following paragraphs:"
                ],
                "text": [
                    "The SRS specifies the requirements for a CSCI and the methods to be used to ensure that each requirement has been met.",
                    "This section identifies the CSCI that this specification applies to, describes the CSCI and provides an overview of the document."
                ],
                "contents":[
                    {
                        "object": "package",
                        "name": "Identification",
                        "instructions": [
                            "This paragraph shall contain a full identification of the system and CSCI to which this document applies, including, as applicable, identification number(s), title(s), abbreviation(s), version number(s), and release number(s)."
                        ],
                        "text": [
                            "This specification applies to the XXXXXXXXXX."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "System and CSCI Overview",
                        "instructions": [
                            "This paragraph shall briefly state the purpose of the system and the CSCI to which this document applies. It shall describe the general nature of the system or subsystem; summarize the history of system development, operation, and maintenance; identify the project sponsor, acquirer, user, developer, and support agencies; identify current and planned operating sites; and list other relevant documents."
                        ],
                        "text": [
                            "The XXXXXXXXX is..."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Document Overview",
                        "instructions": [
                            "This paragraph shall summarize the purpose and contents of this document and shall describe any security or privacy considerations associated with its use."
                        ],
                        "text": [
                            "The structure of this document is based on DID DI-IPSC-81433A, \"Software Requirements Specification\", dated December 15, 1999. The document structure may deviate from the DID to facilitate publishing the document from the contents of a UML/SysML database.",
                            "This document is organized as follows:",
                            "Section 1. Scope: Identifies the scope of this document.",
                            "Section 2. Referenced Documents: Identifies all documents that are referenced in this document.",
                            "Section 3. Requirements: Lists CSCI requirements.",
                            "Section 4. Qualification Provisions: Lists each CSCI requirement and identifies the methods to be used to ensure the requirement has been met.",
                            "Section 5. Requirements Traceability: Provides traceability of the requirements listed in this document to system or subsystem requirements documents.",
                            "Section 6. Notes: Contains a listing of acronyms and terms used in this document and their definition."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Referenced Documents",
                "instructions":[
                    "This section shall list the number, title, revision, and date of all documents referenced in this document. This section shall also identify the source for all documents not available through normal Government stocking activities."
                ],
                "text": [
                    "This section lists all documents referenced in this document."
                ]
            },
            {
                "object": "package",
                "name": "Requirements",
                "instructions": [
                    "This section shall be divided into the following paragraphs to specify the CSCI requirements, that is, those characteristics of the CSCI that are conditions for its acceptance. Each requirement shall be assigned a project-unique identifier to support testing and traceability and shall be stated in such a way that an objective test can be defined for it. Each requirement shall be annotated with associated qualification method(s) (see section 4) and traceability to system (or subsystem, if applicable) requirements (see section 5.a), if not provided in those sections. The degree of detail to be provided shall be guided by the following rule: Include those characteristics of the CSCI that are conditions for CSCI acceptance; defer to design descriptions those characteristics that the acquirer is willing to leave up to the developer. If there are no requirements in a given paragraph, the paragraph shall so state. If a given requirement fits into more than one paragraph, it may be stated once and referenced from the other paragraphs."
                ],
                "text":[
                    "This section identifies requirements for the specified CSCI which are conditions for its acceptance. Each requirement consists of a title, a \"shall statement\", a unique identifier, and the requirement's priority."
                ],
                "contents": [
                    {
                        "object": "package",
                        "name": "Required States and Modes",
                        "instructions": [
                            "If the CSCI is required to operate in more than one state or mode having requirements distinct from other states or modes, this paragraph shall identify and define each state and mode. Examples of states and modes include: idle, ready, active, post­ use analysis, training, degraded, emergency, backup, wartime, peacetime. The distinction between states and modes is arbitrary. A CSCI may be described in terms of states only, modes only, states within modes, modes within states, or any other scheme that is useful. If no states or modes are required, this paragraph shall so state, without the need to create artificial distinctions. If states and/or modes are required, each requirement or group of requirements in this specification shall be correlated to the states and modes. The correlation may be indicated by a table or other method in this paragraph, in an appendix referenced from this paragraph or by annotation of the requirements in the paragraphs where they appear."
                        ],
                        "text": [
                            
                        ]
                    },
                    {
                        "object": "package",
                        "name": "CSCI Capability Requirements",
                        "instructions": [
                            "This paragraph shall be divided into subparagraphs to itemize the requirements associated with each capability of the CSCI. A \"capability\" is defined as a group of related requirements. The word \"capability\" may be replaced with \"function,\" \"subject,\" \"object,\" or other term useful for presenting the requirements.",
                            "Each paragraph shall identify a required CSCI capability and shall itemize the requirements associated with the capability. If the capability can be more clearly specified by dividing it into constituent capabilities, the constituent capabilities shall be specified in subparagraphs. The requirements shall specify required behavior of the CSCI and shall include applicable parameters, such as response times, throughput times, other timing constraints, sequencing, accuracy, capacities (how much/how many), priorities, continuous operation requirements, and allowable deviations based on operating conditions. The requirements shall include, as applicable, required behavior under unexpected, unallowed, or \"out of bounds\" conditions, requirements for error handling, and any provisions to be incorporated into the CSCI to provide continuity of operations in the event of emergencies. Paragraph 3.3.2 of this DID provides a list of topics to be considered when specifying requirements regarding inputs the CSCI must accept and outputs it must produce."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "CSCI External Interface Requirements",
                        "instructions": [
                            "This paragraph shall be divided into subparagraphs to specify the requirements, if any, for the CSCI's external interfaces. This paragraph may reference one or more IRSs or other documents containing these requirements."
                        ],
                        "contents": [
                            {
                                "object": "package",
                                "name": "Interface Identification and Diagrams",
                                "instructions": [
                                    "This paragraph shall identify the required external interfaces of the CSCI (that is, relationships with other entities that involve sharing, providing or exchanging data). The identification of each interface shall include a project­ unique identifier and shall designate the interfacing entities (systems, configuration items, users, etc.) by name, number, version, and documentation references, as applicable. The identification shall state which entities have fixed interface characteristics (and therefore impose interface requirements on interfacing entities) and which are being developed or modified (thus having interface requirements imposed on them). One or more interface diagrams shall be provided to depict the interfaces."
                                ]
                            },
                            {
                                "object": "package",
                                "name": "External Interfaces",
                                "instructions": [
                                    "This paragraph shall identify a CSCI external interface by project-unique identifier, shall briefly identify the interfacing entities, and shall be divided into subparagraphs as needed to state the requirements imposed on the CSCI to achieve the interface. Interface characteristics of the other entities involved in the interface shall be stated as assumptions or as \"When [the entity not covered] does this, the CSCI shall...\" not as requirements on the other entities. This paragraph may reference other documents (such as data dictionaries, standards for communication protocols, and standards for user interfaces) in place of stating the information here. The requirements shall include the following, as applicable, presented in any order suited to the requirements, and shall note any differences in these characteristics from the point of view of the interfacing entities (such as different expectations about the size, frequency, or other characteristics of data elements):",

                                    "\ta. Priority that the CSCI must assign the interface.",

                                    "\tb. Requirements on the type of interface (such as real-time data transfer, storage-and­ retrieval of data, etc.) to be implemented.",

                                    "\tc. Required characteristics of individual data elements that the CSCI must provide, store, send, access, receive, etc., such as:",

                                    "\t\t1) Names/identifiers:",

                                    "\t\t\ta) Project-unique identifier.",

                                    "\t\t\tb) Non-technical (natural-language) name.",

                                    "\t\t\tc) DOD standard data element name.",

                                    "\t\t\td) Technical name (e.g., variable or field name in code or database).",

                                    "\t\t\te) Abbreviation or synonymous names.",

                                    "\t\t2) Data type (alphanumeric, integer, etc.).",

                                    "\t\t3) Size and format (such as length and punctuation of a character string).",

                                    "\t\t4) Units of measurement (such as meters, dollars, nanoseconds).",

                                    "\t\t5) Range or enumeration of possible values (such as 0-99).",

                                    "\t\t6) Accuracy (how correct) and precision (number of significant digits).",

                                    "\t\t7) Priority, timing, frequency, volume, sequencing, and other constraints, such as whether the data element may be updated and whether business rules apply.",

                                    "\t\t8) Security and privacy constraints.",

                                    "\t\t9) Sources (setting/sending entities) and recipients (using/receiving entities).",

                                    "\td. Required characteristics of data element assemblies (records, messages, files, arrays, displays, reports, etc.) that the CSCI must provide, store, send, access, receive, etc., such as:",

                                    "\t\t1) Names/identifiers:",

                                    "\t\t\ta) Project-unique identifier.",

                                    "\t\t\tb) Non-technical (natural language) name.",

                                    "\t\t\tc) Technical name (e.g., record or data structure name in code or database).",

                                    "\t\t\td) Abbreviations or synonymous names.",
                                    
                                    "\t\t2) Data elements in the assembly and their structure (number, order, grouping).",
                                    
                                    "\t\t3) Medium (such as disk) and structure of data elements/assemblies on the medium.",
                                    
                                    "\t\t4) Visual and auditory characteristics of displays and other outputs (such as colors, layouts, fonts, icons and other display elements, beeps, lights).",
                                    
                                    "\t\t5) Relationships among assemblies, such as sorting/access characteristics.",
                                    
                                    "\t\t6) Priority, timing, frequency, volume, sequencing, and other constraints, such as whether the assembly may be updated and whether business rules apply.",
                                    
                                    "\t\t7) Security and privacy constraints.",
                                    
                                    "\t\t8) Sources (setting/sending entities) and recipients (using/receiving entities).",
                                    
                                    "\te. Required characteristics of communication methods that the CSCI must use for the interface, such as:",
                                    
                                    "\t\t1) Project-unique identifier(s).",
                                    
                                    "\t\t2) Communication links/bands/frequencies/media and their characteristics.",
                                    
                                    "\t\t3) Message formatting.",
                                    
                                    "\t\t4) Flow control (such as sequence numbering and buffer allocation).",
                                    
                                    "\t\t5) Data transfer rate, whether periodic/aperiodic, and interval between transfers.",
                                    
                                    "\t\t6) Routing, addressing, and naming conventions.",
                                    
                                    "\t\t7) Transmission services, including priority and grade.",
                                    
                                    "\t\t8) Safety/security/privacy considerations, such as encryption, user authentication, compartmentalization, and auditing.",
                                    
                                    "\tf. Required characteristics of protocols the CSCI must use for the interface, such as:",
                                    
                                    "\t\t1) Project-unique identifier(s).",
                                    
                                    "\t\t2) Priority/layer of the protocol.",
                                    
                                    "\t\t3) Packeting, including fragmentation and reassembly, routing, and addressing.",
                                    
                                    "\t\t4) Legality checks, error control, and recovery procedures",
                                    
                                    "\t\t5) Synchronization, including connection establishment, maintenance, termination.",
                                    
                                    "\t\t6) Status, identification, and any other reporting features.",
                                    
                                    "\tg. Other required characteristics, such as physical compatibility of the interfacing entities (dimensions, tolerances, loads, plug compatibility, etc.), voltages, etc."
                                ]
                            }
                        ]
                    },
                    {
                        "object": "package",
                        "name": "CSCI Internal Interface Requirements",
                        "instructions":[
                            "This paragraph shall specify the requirements, if any, imposed on interfaces internal to the CSCI. If all internal interfaces are left to the design, this fact shall be so stated. If such requirements are to be imposed, paragraph 3.3 of this DID provides a list of topics to be considered."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "CSCI Internal Data Requirements",
                        "instructions":[
                            "This paragraph shall specify the requirements, if any, imposed on data internal to the CSCI. Included shall be requirements, if any, on databases and data files to be included in the CSCI. If all decisions about internal data are left to the design, this fact shall be so stated. If such requirements are to be imposed, paragraphs 3.3.2.c and 3.3.2.d of this DID provide a list of topics to be considered."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Adaptation Requirements",
                        "instructions":[
                            "This paragraph shall specify the requirements, if any, concerning installation-dependent data to be provided by the CSCI (such as site-dependent latitude and longitude or site-dependent state tax codes) and operational parameters that the CSCI is required to use that may vary according to operational needs (such as parameters indicating operation-dependent targeting constants or data recording)."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Safety Requirements",
                        "instructions":[
                            "This paragraph shall specify the CSCI requirements, if any, concerned with preventing or minimizing unintended hazards to personnel, property, and the physical environment. Examples include safeguards the CSCI must provide to prevent inadvertent actions (such as accidentally issuing an \"auto pilot off\" command) and non-actions (such as failure to issue an intended \"auto pilot off\" command). This paragraph shall include the CSCI requirements, if any, retarding nuclear components of the system, including, as applicable, prevention of inadvertent detonation, and compliance with nuclear safety rules."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Security and Privacy Requirements",
                        "instructions":[
                            "This paragraph shall specify the CSCI requirements, if any, concerned with maintaining security and privacy. The requirements shall include, as applicable, the security/privacy environment in which the CSCI must operate, the type and degree of security or privacy to be provided, the security/privacy risks the CSCI must withstand, required safeguards to reduce those risks, the security/privacy policy that must be met, the security/privacy accountability the CSCI must provide, and the criteria that must be met for security/privacy certification/accreditation."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "CSCI Environment Requirements",
                        "instructions":[
                            "This paragraph shall specify the requirements, if any, regarding the environment in which the CSCI must operate. Examples include the computer hardware and operating system on which the CSCI must run.· (Additional requirements concerning computer resources are given in the next paragraph)."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Computer Resource Requirements",
                        "instructions":[
                            "This paragraph shall be divided into the following subparagraphs."
                        ],
                        "contents":[
                            {
                                "object": "package",
                                "name": "Computer Hardware Requirements",
                                "instructions":[
                                    "This paragraph shall specify the requirements, if any, regarding computer hardware that must be used by the CSCI. The requirements shall include, as applicable, number of each type of equipment, type, size, capacity, and other required characteristics of processors, memory, input/output devices, auxiliary storage, communications/network equipment, and other required equipment."
                                ]
                            },
                            {
                                "object": "package",
                                "name": "Computer Hardware Resource Utilization Requirements",
                                "instructions":[
                                    "This paragraph shall specify the requirements, if any, on the CSCI's computer hardware resource utilization, such as maximum allowable use of processor capacity, memory capacity, input/output device capacity, auxiliary storage device capacity, and communications/network equipment capacity. The requirements (stated, for example, as percentages of the capacity of each computer hardware resource) shall include the conditions, if any, under which the resource utilization is to be measured."
                                ]
                            },
                            {
                                "object": "package",
                                "name": "Computer Software Requirements",
                                "instructions":[
                                    "This paragraph shall specify the requirements, if any, regarding computer software that must be used by, or incorporated into, the CSCI. Examples include operating systems, database management systems, communications/network software, utility software, input and equipment simulators, test software, and manufacturing software. The correct nomenclature, version, and documentation references of each such software item shall be provided."
                                ]
                            },
                            {
                                "object": "package",
                                "name": "Computer Communication Requirements",
                                "instructions":[
                                    "This paragraph shall specify the additional requirements, if any, concerning the computer communications that must be used by the CSCI. Examples include geographic locations to be linked; configuration and network topology; transmission techniques; data transfer rates; gateways; required system use times; type and volume of data to be transmitted/received; time boundaries for transmission/reception/response; peak volumes of data; and diagnostic features."
                                ]
                            }
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Software Quality Factors",
                        "instructions":[
                            "This paragraph shall specify the CSCI requirements, if any, concerned with software quality factors identified in the contract or derived from a higher level specification. Examples include quantitative requirements regarding CSCI functionality (the ability to perform all required functions), reliability (the ability to perform with correct, consistent results), maintainability (the ability to be easily corrected), availability (the ability to be accessed and operated when needed), flexibility (the ability to be easily adapted to changing requirements), portability (the ability to be easily modified for a new environment), reusability (the ability to be used in multiple applications), testability (the ability to be easily and thoroughly tested), usability (the ability to be easily learned and used), and other attributes."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Design and Implementation Constraints",
                        "instructions":[
                            "This paragraph shall specify the requirements, if any, that constrain the design and implementation of the CSCI. These requirements may be specified by reference to appropriate commercial or military standards and specifications. Examples include requirements concerning:",

                            "\ta) Use of a particular CSCI architecture or requirements on the architecture, such as required databases or other software units; use of standard, military, or existing components; or use of Government/acquirer-furnished property (equipment, information, or software).",
                            
                            "\tb) Use of particular design or implementation standards; use of particular data standards; use of a particular programming language.",
                            
                            "\tc) Flexibility and expandability that must be provided to support anticipated areas of growth or changes in technology, threat, or mission."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Personnel-Related Requirements",
                        "instructions":[
                            "This paragraph shall specify the CSCI requirements, if any, included to accommodate the number, skill levels, duty cycles, training needs, or other information about the personnel who will use or support the CSCI. Examples include requirements for the number of simultaneous users and for built-in help or training features. Also included shall be the human factors engineering requirements, if any, imposed on the CSCI. These requirements shall include, as applicable, considerations for the capabilities and limitations of humans, foreseeable human errors under both normal and extreme conditions, and specific areas where the effects of human error would be particularly serious. Examples include requirements for color and duration of error messages, physical placement of critical indicators or keys, and use of auditory signals."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Training-Related Requirements",
                        "instructions":[
                            "This paragraph shall specify the CSCI requirements, if any, pertaining to training. Examples include training software to be included in the CSCI."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Logistics-Related Requirements",
                        "instructions":[
                            "This paragraph shall specify the CSCI requirements, if any, concerned with logistics considerations. These considerations may include: system maintenance, software support, system transportation modes, supply-system requirements, impact on existing facilities, and impact on existing equipment."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Other Requirements",
                        "instructions":[
                            "This paragraph shall specify additional CSCI requirements, if any, not covered in the previous paragraphs."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Packaging Requirements",
                        "instructions":[
                            "This section shall specify the requirements, if any, for packaging, labeling, and handling the CSCI for delivery (for example, delivery on 8-track magnetic tape labeled and packaged in a certain way). Applicable military specifications and standards may be referenced if appropriate."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Precedence and Criticality of Requirements",
                        "instructions":[
                            "This paragraph shall specify, if applicable, the order of precedence, criticality, or assigned weights indicating the relative importance of the requirements in this specification. Examples include identifying those requirements deemed critical to safety, to security, or to privacy for purposes of singling them out for special treatment. If all requirements have equal weight, this paragraph shall so state."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Qualification Provisions",
                "instructions":[
                    "This section shall define a set of qualification methods and shall specify for each requirement in Section 3 the method(s) to be used to ensure that the requirement has been met. A table may be used to present this information, or each requirement in Section 3 may be annotated with the method(s) to be used. Qualification methods may include:",

                    "\ta. Demonstration: The operation of the CSCI, or a part of the CSCI that relies on observable functional operation not requiring the use of instrumentation, special test equipment, or subsequent analysis.",
                    
                    "\tb. Test: The operation of the CSCI, or a part of the CSCI, using instrumentation or other special test equipment to collect data for later analysis.",
                    
                    "\tc. Analysis: The processing of accumulated data obtained from other qualification methods. Examples are reduction interpolation, or extrapolation of test results.",
                    
                    "\td. Inspection: The visual examination of CSCI code, documentation, etc.",
                    
                    "\te. Special qualification methods. Any special qualification methods for the CSCI, such as special tools, techniques, procedures, facilities, acceptance limits."
                ]
            },
            {
                "object": "package",
                "name": "Requirements Traceability",
                "instructions":[
                    "This paragraph shall contain:",

                    "\ta. Traceability from each CSCI requirement in this specification to the system (or subsystem, if applicable) requirements it addresses. (Alternatively, this traceability may be provided by annotating each requirement in Section 3.)",
                    
                    "\tNote: Each level of system refinement may result in requirements not directly traceable to higher-level requirements. For example, a system architectural design that creates multiple CSCIs may result in requirements about how the CSCIs will interface, even though these interfaces are not covered in system requirements. Such requirements may be traced to a general requirement such as \"system implementation\" or to the system design decisions that resulted in their generation.",
                    
                    "\tb. Traceability from each system (or subsystem, if applicable) requirement allocated to this CSCI to the CSCI requirements that address it. All system (subsystem) requirements allocated to this CSCI shall be accounted for. Those that trace to CSCI requirements contained in IRSs shall reference these IRSs."
                ]
            },
            {
                "object": "package",
                "name": "Notes",
                "instructions":[
                    "This section shall contain any general information that aids in understanding this document (e.g., background information, glossary, rationale). This section shall include an alphabetical listing of all acronyms, abbreviations, and their meanings as used in this document and a list of any terms and definitions needed to understand this document."
                ]
            },
            {
                "object":"package",
                "name": "Appendices",
                "instructions":[
                    "Appendices may be used to provide information published separately for convenience in document maintenance (e.g., charts classified data). As applicable, each appendix shall be referenced in the main body of the document where the data would normally have been provided. Appendixes may be bound as separate documents for ease in handling. Appendixes shall be lettered alphabetically (A, B, etc.)."
                ]
            }
        ]
    }
]