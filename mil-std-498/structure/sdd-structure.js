const SDD_STRUCTURE = [
    {
        "object": "package",
        "name": "Software Design Description",
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
                    "The IDD describes the interface characteristics of one or more interfaces between systems, subsystems, HWCIs, CSCIs, manual operations or other system components and traces that design to system/subsystem or software requirements.",
                    "This section identifies the systems, subsystems, HWCIs, CSCIs, manual operations or other system components that this specification applies to, describes these entities and provides an overview of the document."
                ],
                "contents":[
                    {
                        "object": "package",
                        "name": "Identification",
                        "instructions": [
                            "This paragraph shall contain a full identification of the system or subsystem to which this document applies, including, as applicable, identification number(s), title(s), abbreviation(s), version number(s), and release number(s)."
                        ],
                        "text": [
                            "This design description applies to the XXXXXXXXXX."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "System/Subsystem Overview",
                        "instructions": [
                            "This paragraph shall briefly state the purpose of the system or subsystem to which this document applies. It shall describe the general nature of the system or subsystem; summarize the history of system development, operation, and maintenance; identify the project sponsor, acquirer, user, developer, and support agencies; identify current and planned operating sites; and list other relevant documents."
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
                            "The structure of this document is based on DID DI-IPSC-81436A, \"Interface Design Description\", dated December 15, 1999. The document structure may deviate from the DID to facilitate publishing the document from the contents of a UML/SysML database.",
                            "This document is organized as follows:",
                            "Section 1. Scope: Identifies the scope of this document.",
                            "Section 2. Referenced Documents: Identifies all documents that are referenced in this document.",
                            "Section 3. Interface Design: XXXXXXXXXXXXXXXXXXXXXXX.",
                            "Section 4. Requirements Traceability: XXXXXXXXXXXXXXXXXX.",
                            "Section 5. Notes: Contains a listing of acronyms and terms used in this document and their definition."
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
                "object":"package",
                "name": "CSCI-Wide Design Decisions",
                "instructions":[
                    "This section shall be divided into paragraphs as needed to present CSCI-wide design decisions , that is, decisions about the CSCI's behavioral design (how it will behave, from a user's point of view, in meeting its requirements, ignoring internal implementation) and other decisions affecting the selection and design of the software units that make up the CSCI. If all such decisions are explicit in the CSCI requirements or are deferred to the design of the CSCI's software units, this section shall so state. Design decisions that respond to requirements designated critical, such as those for safety, security, or privacy, shall be placed in separate paragraphs. If a design decision depends upon system states or modes, this dependency shall be indicated. Design conventions needed to understand the design shall be presented or referenced. Examples of CSCI-wide design decisions are the following:",

                    "\ta. Design decisions regarding inputs the CSCI will accept and outputs it will produce, including interfaces with other systems, HWCIs, CSCIs, and users (4.3.x of this DID identifies topics to be considered in this description). If part or all of this information is given in IDDs, they may be referenced.",
                    
                    "\tb. Design decisions on CSCI behavior in response to each input or condition, including actions the CSCI will perform, response times and other performance characteristics, description of physical systems modeled, selected equations/algorithms/rules, and handling of unallowed inputs or conditions.",
                    
                    "\tc. Design decisions on how databases/date files will appear to the user (4.3.x of this DID identifies topics to be considered in this description). If part or all of this information is given in DBDDs, they may be referenced.",
                    
                    "\td. Selected approach to meeting safety, security, and privacy requirements.",
                    
                    "\te. Other CSCI-wide design decisions made in response to requirements, such as selected approach to providing required flexibility, availability, and maintainability ."
                ]
            },

            {
                "object":"package",
                "name": "CSCI Architectural Design",
                "instructions":[
                    "This section shall be divided into the following paragraphs to describe the CSCI architectural design. If part or all of the design depends upon system states or modes, this dependency shall be indicated. If design information falls into more than one paragraph, it may be presented once and referenced from the other paragraphs. Design conventions needed to understand the design shall be presented or referenced."
                ],
                "contents":[
                    {
                        "object":"package",
                        "name": "CSCI Components",
                        "instructions":[
                            "This paragraph shall:",
                    
                            "\ta. Identify the software units that make up the CSCI. Each software unit shall be assigned a project-unique identifier.",
                    
                            "\tNote: A software unit is an element in the design of a CSCI; for example, a major subdivision of a CSCI, a component of that subdivision, a class, object, module, function, routine, or database. Software units may occur at different levels of a hierarchy and may consist of other software units. Software units in the design may or may not have a one-to-one relationship with the code and data entities (routines, procedures, databases, data files, etc.) that implement them or with the computer files containing those entities. A database may be treated as CSCI or as a software unit. The SDD may refer to software units by any name(s) consistent with the design methodology being used.",
                    
                            "\tb. Show the static (such as \"consists of\") relationship(s) of the software units. Multiple relationships may be presented, depending on the selected software design methodology (for example, in an object-oriented design, this paragraph may present the class and object structures as well as the module and process architectures of the CSCI).",
                    
                            "\tc. State the purpose of each software unit and identify the CSCI requirements and CSCI­ wide design decisions allocated to it. (Alternatively, the allocation of requirements may be provided in 6.a.).",
                    
                            "\td. Identify each software unit's development status/type (such as new development, existing design or software to be reused as is, existing design or software to be reengineered, software to be developed for reuse, software planned for Build N, etc.) For existing design or software, the description shall provide identifying information, such as name, version, documentation references, library, etc.",
                    
                            "\te. Describe the CSCI's (and as applicable, each software unit's) planned utilization of computer hardware resources (such as processor capacity, memory capacity, input/output device capacity, auxiliary storage capacity, and communications/network equipment capacity). The description shall cover all computer hardware resources included in resource utilization requirements for the CSCI, in system-level resource allocations affecting the CSCI, and in resource utilization measurement planning in the Software Development Plan. If all utilization data for a given computer hardware resource are presented in a single location, such as in one SDD, this paragraph may reference that source. Included for each computer hardware resource shall be:",
                    
                            "\t\t1) The CSCI requirements or system-level resource allocations being satisfied.",
                    
                            "\t\t2) The assumptions and conditions on which the utilization data are based (for example, typical usage, worst-case usage, assumption of certain events).",
                            
                            "\t\t3) Any special considerations affecting the utilization (such as use of virtual memory, overlays, or multiprocessors or the impacts of operating system overhead, library software, or other implementation overhead).",
                            
                            "\t\t4) The units of measure used (such as percentage of processor capacity, cycles per second, bytes of memory, kilobytes per second).",
                            
                            "\t\t5) The level(s) at which the estimates or measures will be made (such as software unit, CSCI, or executable program).",
                    
                            "\tf. Identify the program library in which the software that implements each software unit is to be placed."
                        ]
                    },
                    {
                        "object":"package",
                        "name": "Concept of Execution",
                        "instructions":[
                            "This paragraph shall describe the concept of execution among the software units. It shall include diagrams and descriptions showing the dynamic relationship of the software units, that is, how they will interact during CSCI operation, including, as applicable, flow of execution control, data flow, dynamically controlled sequencing, state transition diagrams, priorities among units, handling of interrupts, timing/sequencing relationships, exception handling, concurrent execution, dynamic allocation/deallocation, dynamic creation/deletion of objects, processes, tasks, and other aspects of dynamic behavior."
                        ]
                    },
                    {
                        "object":"package",
                        "name": "Interface Design",
                        "instructions":[
                            "This paragraph shall be divided into the following subparagraphs to describe the interface characteristics of the software units. It shall include both interfaces among the software units and their interfaces with external entities such a systems, configuration items, and users. If part or all of this information is contained in IDDs, in section 5 of the SDD, or elsewhere, these sources may be referenced.."
                        ],
                        "contents":[
                            {
                                "object": "package",
                                "name": "Interface Identification and Diagrams",
                                "instructions":[
                                    "This paragraph shall state the project­ unique identifier assigned to each interface and shall identify the interfacing entities (software units, systems, configuration items, users, etc.) by name, number, version, and documentation references, as applicable. The identification shall state which entities have fixed interface characteristics (and therefore impose interface requirements on interfacing entities) and which are being developed or modified (thus having interface requirements imposed on them). One or more interface diagrams shall be provided, as appropriate, to depict the interfaces."
                                ]
                            },
                            {
                                "object": "package",
                                "name": "Interfaces",
                                "instructions":[
                                    "This paragraph shall identify an interface by project-unique identifier, shall briefly identify the interfacing entities, and shall be divided into subparagraphs as needed to describe the interface characteristics of one or both of the interfacing entities. If a given interfacing entity is not covered by this SDD (for example, an external system) but its interface characteristics need to be mentioned to describe interfacing entities that are, these characteristics shall be stated as assumptions or as \"When [the entity not covered] does this, [the entity that is covered] will ...\" This paragraph may reference other documents (such as data dictionaries, standards for protocols, and standards for user interfaces) in place of stating the information here. The design description shall include the following, as applicable, presented in any order suited to the information to be provided, and shall note any differences in these characteristics from the point of view of the interfacing entities (such as different expectations about the size, frequency, or other characteristics of data elements):",

                                    "\ta. Priority assigned to the interface by the interfacing entity(ies).",

                                    "\tb. Type of interface (such as real-time data transfer, storage-and-retrieval of data, etc.) to be implemented.",

                                    "\tc. Characteristics of individual data elements that the interfacing entity (ies) will provide, store, send, access, receive, etc., such as:",

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

                                    "\td. Characteristics of data element assemblies (records, messages, files, arrays, displays, reports, etc.) that the interfacing entity (ies) will provide, store, send, access, receive, etc., such as:",

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

                                    "\te. Characteristics of communication methods that the interfacing entity (ies) will use for the interface such as:",

                                    "\t\t1) Project-unique identifier(s).",

                                    "\t\t2) Communication links/bands/frequencies/media and their characteristics.",

                                    "\t\t3) Message formatting.",

                                    "\t\t4) Flow control (such as sequence numbering and buffer allocation).",

                                    "\t\t5) Data transfer rate, whether periodic/aperiodic, and interval between transfers.",

                                    "\t\t6) Routing, addressing, and naming conventions.",

                                    "\t\t7) Transmission services, including priority and grade.",

                                    "\t\t8) Safety/security/privacy considerations, such as encryption, user authentication, compartmentalization, and auditing.",

                                    "\tf. Characteristics of protocols that the interfacing entity(ies) will use for the interface, such as:",

                                    "\t\t1) Project-unique identifier(s).",

                                    "\t\t2) Priority/layer of the protocol.",

                                    "\t\t3) Packeting, including fragmentation and reassembly, routing, and addressing.",

                                    "\t\t4) Legality checks, error control, and recovery procedures.",

                                    "\t\t5) Synchronization, including connection establishment, maintenance, termination.",

                                    "\t\t6) Status, identification, and any other reporting features.",

                                    "\tg. Other characteristics, such as physical compatibility of the interfacing entity (ies) (dimensions, tolerances, loads, voltages, plug compatibility, etc.)"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "CSCI Detailed Design",
                "instructions":[
                    "This section shall be divided into the following paragraphs to describe each software unit of the CSCI. If part or all of the design depends upon system states or modes, this dependency shall be indicated. If design information falls into more than one paragraph, it may be presented once and referenced from the other paragraphs. Design conventions needed to understand the design shall be presented or referenced. Interface characteristics of software units may be described here, in Section 4, or in IDDs. Software units that are databases, or that are used to access or manipulate databases, may be described here or in DBDDs.",

                    "Each subparagraph shall identify a software unit by project-unique identifier and shall describe the unit. The description shall include the following information, as applicable. Alternatively, this paragraph may designate a group of software units and identify and describe the software units and identify and describe the software units in subparagraphs. Software units that contain other software units may reference the descriptions of those units rather than repeating information.",
                    
                    "\ta. Unit design decisions, if any, such as algorithms to be used, if not previously selected.",
                    
                    "\tb. Any constraints, limitations, or unusual features in the design of the software unit.",
                    
                    "\tc. The programming language to be used and rationale for its use if other than the specified CSCI language.",
                    
                    "\td. If the software unit consists of or contains procedural commands (such as menu selections in a database management system (DBMS) for defining forms and reports, on line DBMS queries for database access and manipulation, input to a graphical user interface (GUI) builder for automated code generation, commands to the operating system, or shell scripts), a list of the procedural commands and reference to user manuals or other documents that explain them.",
                    
                    "\te. If the software unit contains, receives, or outputs data, a description of its inputs, outputs, and other data elements and data element assemblies, as applicable. Paragraph 4.3.x of this DID provides a list of topics to be covered, as applicable. Data local to the software unit shall be described separately from data input to or output from the software unit. If the software unit is a database, a corresponding DBDD shall be referenced; interface characteristics may be provided here or by referencing section 4 or the corresponding IDD(s).",
                    
                    "\tf. If the software unit contains logic, the logic to be used by the software unit, including, as applicable:",
                    
                    "\t\t1) Conditions in effect within the software unit when its execution is initiated.",
                    
                    "\t\t2) Conditions under which control is passed to other software units.",
                    
                    "\t\t3) Response and response time to each input, including data conversion, renaming, and data transfer operations.",
                    
                    "\t\t4) Sequence of operations and dynamically controlled sequencing during the software unit's operation, including:",
                    
                    "\t\t\ta) The method for sequence control.",
                    
                    "\t\t\tb) The logic and input conditions of that method, such as timing variations, priority assignments.",
                    
                    "\t\t\tc) Data transfer in and out of memory.",
                    
                    "\t\t\td) The sensing of discrete input signals, and timing relationships between interrupt operations within the software unit.",
                    
                    "\t\t5) Exception and error handling."
                ]
            },
            {
                "object": "package",
                "name": "Requirements Traceability",
                "instructions":[
                    "This section shall contain:",
                    "\ta. Traceability from each system component identified in this SSDD to the system requirements allocated to it. (Alternatively, this traceability may be provided in 4.1.)",
                    "\tb. Traceability from each system requirement to the system components to which it is allocated."
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
];

